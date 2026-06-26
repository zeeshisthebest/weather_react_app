import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import weatherIcons from "../utils/weatherIcons";
import storageService from "../services/localStorageService";
import { getLocationFromIp } from "../services/ipLocationService";
import weatherService from "../services/currentWeatherService";
import { getWeatherBg } from "../data/weatherCodes";

const REFRESH_PERIOD_MS = 1000 * 60 * 15;
const MAX_INIT_RETRIES = 3;
const RETRY_DELAY_MS = 10000;

function formatLastUpdate() {
    const dateObj = new Date();
    const dateString = dateObj.toDateString().split(" ");
    const date = `( ${dateString[0]} - ${dateString[1]} ${dateString[2]}, ${dateString[3]} )`;
    const time = dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    return `${time} ${date}`;
}

async function resolveLocation(searchedLocation) {
    let loc = searchedLocation || storageService.getLocation();

    if (!loc) {
        try {
            const locFromIp = await getLocationFromIp();
            loc = locFromIp.city;
            toast.success("IP Location: " + loc);
        } catch {
            loc = "London";
            toast.error("Couldn't fetch location from IP, set to default: London");
        }
    } else {
        console.log("Location found in local: " + loc);
    }

    storageService.setLocation(loc);
    return loc;
}

export function useWeatherDashboard() {
    const [weatherBg] = useState(weatherIcons.wBg.sunnyDay);
    const [data, setData] = useState({});
    const [minMax, setMinMax] = useState({});
    const [updatedAt, setUpdatedAt] = useState(null);
    const [loading, setLoading] = useState(true);

    const dashboardRef = useRef(null);
    const refreshTimerRef = useRef(null);

    const setBackground = useCallback((imgPath) => {
        dashboardRef.current?.style.setProperty(
            "--weather-bg-img",
            `url(${imgPath})`
        );
    }, []);

    const getWeather = useCallback(async (searchedLocation) => {
        const location = await resolveLocation(searchedLocation);

        try {
            const weather = await weatherService.getCurrentWeather(location);
            const astro = await weatherService.getAstroData(location);
            const weatherData = weatherService.mapWeatherToModel(
                weather.data,
                astro.data
            );

            setData(weatherData);
            setUpdatedAt(formatLastUpdate());
            document.title = weatherData.location.name + " | Weather";
            setBackground(
                getWeatherBg(weatherData.weather.code, weatherData.astro.sunUp)
            );

            return weatherData;
        } catch (error) {
            console.log(error);
            toast.error("Error: Couldn't get weather info");
            return null;
        }
    }, [setBackground]);

    const initRequest = useCallback(async () => {
        for (let attempt = 0; attempt < MAX_INIT_RETRIES; attempt++) {
            setLoading(true);
            const weatherData = await getWeather();
            setLoading(false);

            if (weatherData?.weather) {
                return;
            }

            await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
        }
    }, [getWeather]);

    const scheduleRefresh = useCallback(() => {
        if (refreshTimerRef.current) {
            clearTimeout(refreshTimerRef.current);
        }

        refreshTimerRef.current = setTimeout(() => {
            getWeather();
        }, REFRESH_PERIOD_MS);
    }, [getWeather]);

    useEffect(() => {
        initRequest();
        scheduleRefresh();

        return () => {
            if (refreshTimerRef.current) {
                clearTimeout(refreshTimerRef.current);
            }
        };
    }, [initRequest, scheduleRefresh]);

    return {
        weatherBg,
        data,
        minMax,
        updatedAt,
        loading,
        dashboardRef,
        setMinMax,
        getWeather,
    };
}
