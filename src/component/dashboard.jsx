import React, { Component } from "react";
import LeftSideBar from "./leftSideBar";
import MainContent from "./mainContent";
import LoadingIcon from "./common/loadingIcon";
import weatherIcons from "../utils/weatherIcons";
import storageService from "../services/localStorageService";
import { getLocationFromIp } from "../services/ipLocationService";
import { toast } from "react-toastify";
import weatherService from "../services/currentWeatherService";
import { WeatherContext } from "../contexts/contexts";
import { getWeatherBg } from "../data/weatherCodes";

/**
 * The main container of the app
 */
class DashboardView extends Component {
    state = {
        weatherBg: weatherIcons.wBg.sunnyDay,
        data: {},
        minMax: {},
        updatedAt: null,
        loading : true
    };

    /**
     * ref to update the background of the app
     */
    dashboardRef = React.createRef();

    /**
     * timer ID for regular interval udpate
     */
    refreshTimer = null;

    /**
     * Sets the location into the state either from local storage / IP
     *
     * @returns location string
     */
    setLocation = async (searchedLocation) => {
        let loc = searchedLocation || storageService.getLocation();
        if (!loc) {
            try {
                let locFromIp = await getLocationFromIp();
                loc = locFromIp.city;
                toast.success("IP Location: " + loc);

            } catch (error) {
                loc = "London"; // defualting
                toast.error("Couldn't fetch location from IP, set to default: London");
            }
        } else {
            console.log("Location found in local: " + loc);
        }
        storageService.setLocation(loc);
        return loc;
    };

    /**
     *
     * First it finds the location then calls API to fetch weather
     *
     * @returns none
     */
    getWeather = async (loc) => {
        const location = await this.setLocation(loc);
        try {
            let weather = await weatherService.getCurrentWeather(location);
            let astro = await weatherService.getAstroData(location);
            let weatherData = weatherService.mapWeatherToModel(
                weather.data,
                astro.data
            );
            this.setState({
                data: weatherData,
                updatedAt: this.getLastUpdate(),
            });

            document.title = weatherData.location.name + " | Weather";
            //Sets the app background
            this.setBackground(getWeatherBg(weatherData.weather.code, weatherData.astro.sunUp));
        } catch (error) {
            console.log(error);
            toast.error("Error: Couldn't get weather info");
        }

    };

    /**
     * @param {object} minMax The minimum and maximum for today
     */
    setMinMax = (minMax) => {
        this.setState({ minMax });
    };

    /**
     * @param {string} imgPath path to the image for background
     */
    setBackground = (imgPath) => {
        this.dashboardRef.current.style.setProperty(
            "--weather-bg-img",
            `url(${imgPath})`
        );
    };

    /**
     * @returns The time and date string in the format hh:mm (day | mon dd, yyyy)
     */
    getLastUpdate = () => {
        const dateObj = new Date();
        let dateString = dateObj.toDateString().split(" ");
        let date = `( ${dateString[0]} - ${dateString[1]} ${dateString[2]}, ${dateString[3]} )`;
        let time = dateObj.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        return `${time} ${date}`;
    };


    // Start the all data fetching process and retries if failed once
    initRequest = async ()=>{
        let retries = 0;

        while(!Object.keys(this.state.data).length &&  retries <3){
            this.setState({loading: true})
            console.log('Getting Data');
            await this.getWeather();
            this.setState({loading: false})
            this.state.data?.weather || await new Promise(resolve=>setTimeout(resolve, 10000));
            ++retries;
        }
    }
    componentDidMount () {
        this.initRequest();
        this.refreshApp();
    }

    componentWillUnmount () {
        clearTimeout(this.refreshTimer);
    }

    // Refreshes the app after a time (defualt to 15)
    refreshApp = () => {
        const refreshPeriod = 1000 * 60 * 15; //15 minutes
        if (this.refreshTimer) clearTimeout(this.refreshTimer);
        this.refreshTimer = setTimeout(() => {
            this.getWeather();
        }, refreshPeriod);
    }

    render () {
        const { data, weatherBg, minMax } = this.state;

        return (
            <main
                className="bg-black bg-[image:var(--weather-bg-img)] bg-center bg-cover bg-opacity-30 min-w-[1400px] max-w-[1400px] min-h-[600px] rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center relative overflow-hidden transition-all duration-700 delay-700"
                style={{ "--weather-bg-img": `url(${weatherBg})` }}
                ref={this.dashboardRef}>
                <div className="grid grid-cols-5 gap-9 w-full h-full">
                    <WeatherContext.Provider
                        value={{
                            data: data,
                            setMinMax: this.setMinMax,
                            minMax: minMax,
                            updateLoc: this.getWeather,
                        }}>
                        <LeftSideBar />
                        <MainContent />
                    </WeatherContext.Provider>
                    <span className="text-slate-300 absolute bottom-0 right-0 pr-5 pb-2 pl-2 pt-1 rounded-sm text-xs bg-black bg-opacity-50">
                        Last Updated at: {this.state.updatedAt ?? "never"}
                    </span>
                </div>
                {this.state.loading && <LoadingIcon />}
            </main>
        );
    }
}

export default DashboardView;
