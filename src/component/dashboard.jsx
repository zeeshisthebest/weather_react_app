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
import { getWeatherBg } from "../data/weatherCodes";

class DashboardView extends Component {
    state = {
        weatherBg: weatherIcons.wBg.lightSnowNight,
        data: {},
        minMax: {},
    };

    dashboardRef = React.createRef();

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
     * First it finds the location and after it calls API to fetch weather
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
            this.setBackground(getWeatherBg(weatherData.weather.code));
        } catch (error) {
            console.log(error);
            toast.error("Error: Couldn't get weather info");
        }
    };

    /**
     *
     * @param {object} minMax The minimum and maximum for today
     */
    setMinMax = (minMax) => {
        this.setState({ minMax });
    };

    /**
     *
     * @param {string} imgPath Type of image based on the weather condition
     */
    setBackground = (imgPath) => {

        this.dashboardRef.current.style.setProperty("--weather-bg-img", `url(${imgPath})`);
    };

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
        // let weatherBg = `url(${this.state.weatherBg})`;
        const { data, weatherBg, minMax } = this.state;

        return (
            <main
                className="bg-black bg-[image:var(--weather-bg-img)] bg-center bg-cover bg-opacity-30 min-w-[1400px] max-w-[1400px] min-h-[600px] rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center relative overflow-hidden transition-all duration-700"
                style={{ "--weather-bg-img": `url(${weatherBg})` }}
                ref={this.dashboardRef}>
                <div className="grid grid-cols-5 gap-9 w-full h-full">
                    <WeatherContext.Provider
                        value={{ data: data, setMinMax: this.setMinMax, minMax: minMax }}>
                        <LeftSideBar />
                        <MainContent />
                    </WeatherContext.Provider>
                </div>
                {Object.keys(data).length || <LoadingIcon />}
            </main>
        );
    }
}

export default DashboardView;
