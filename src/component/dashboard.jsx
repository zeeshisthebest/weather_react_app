import React, { Component } from "react";
import LeftSideBar from "./leftSideBar";
import MainContent from "./mainContent";
import LoadingIcon from "./common/loadingIcon";
import weatherIcons from "./utils/weatherIcons";
import storageService from "../services/localStorageService";
import { getLocationFromIp } from "../services/ipLocationService";
import { toast } from "react-toastify";
import weatherService from "../services/currentWeatherService";
import { WeatherContext } from "../contexts/contexts";

class DashboardView extends Component {
    state = {
        weatherBg: weatherIcons.wBg.clearNight,
        data: {},
        minMax: {}
    };


    /**
     * Sets the location into the state either from local storage / IP
     *
     * @returns none
     */
    setLocation = async () => {
        let loc = storageService.getLocation();
        if (!loc) {
            console.log("No location found");
            try {
                let locFromIp = await getLocationFromIp();
                loc = locFromIp.city;
                storageService.setLocation(loc);
                toast.success("IP Location: " + loc);
            } catch (error) {
                loc = "London"; // defualting
                toast.error("Couldn't fetch location from IP, set to default: London");
            }
        } else {
            console.log("Location found in local: " + loc);
        }
        return loc;
    };

    /**
     *
     * @param {string} location Name to fetch location of
     */
    getWeather = async () => {
        const location = await this.setLocation();
        try {
            let weather = await weatherService.getCurrentWeather(location);
            let astro = await weatherService.getAstroData(location);
            let weatherData = weatherService.mapWeatherToModel(
                weather.data,
                astro.data
            );
            this.setState({ data: weatherData });
        } catch (error) {
            toast.error("Error: Couldn't get weather info");
        }
    };

    /**
     *
     * @param {objecy} minMax The minimun and maximum for today
     */
    setMinMax = (minMax) => {
        this.setState({ minMax });
    }

    componentDidMount () {
        let retries = 0;
        while (!Object.keys(this.state.data).length && retries <= 3) {
            setTimeout(() => {
                this.getWeather();
            }, 1500);
            ++retries;
        }
    }

    render () {
        let weatherBg = `url(${this.state.weatherBg})`;

        return (
            <main
                className="bg-black bg-[image:var(--weather-bg-img)] bg-center bg-cover bg-opacity-30 min-w-[1400px] max-w-[1400px] min-h-[600px] rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center relative overflow-hidden"
                style={{ "--weather-bg-img": weatherBg }}>
                <div className="grid grid-cols-5 gap-9 w-full h-full">
                    <WeatherContext.Provider value={{ data: this.state.data, setMinMax: this.setMinMax, minMax: this.state.minMax }}>
                        <LeftSideBar />
                        <MainContent />
                    </WeatherContext.Provider>
                </div>
                {Object.keys(this.state.data).length || <LoadingIcon />}
            </main>
        );
    }
}

export default DashboardView;
