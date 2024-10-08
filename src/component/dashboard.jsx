import React, { Component } from "react";
import LeftSideBar from "./leftSideBar";
import MainContent from "./mainContent";
import LoadingIcon from "./common/loadingIcon";
import weatherIcons from "./utils/weatherIcons";
import { getLocation, setLocation } from "../services/localStorageService";
import { getLocationFromIp } from "../services/ipLocationService";
import { toast } from "react-toastify";

class DashboardView extends Component {

    state = {
        weatherBg: weatherIcons.wBg.clearNight,
        data: [],
    };

    setLocation = async () => {
        let loc = getLocation();
        if (!loc) {
            console.log('No location found');
            try {
                let locFromIp = await getLocationFromIp();
                loc = locFromIp.data.city;
                setLocation(loc);
                toast.success('Location set to: ' + loc);
            } catch (error) {
                toast.error("Couldn't fetch location from IP");
            }
        } else {
            console.log("Location found: " + loc);
        }

        return loc;
    }

    componentDidMount () {

    }

    render () {
        let weatherBg = `url(${this.state.weatherBg})`;

        return (
            <main
                className="bg-black bg-[image:var(--weather-bg-img)] bg-center bg-cover bg-opacity-30 w-4/5 min-h-[600px] rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center relative overflow-hidden"
                style={{ "--weather-bg-img": weatherBg }}>
                <div className="grid grid-cols-5 gap-9 w-full h-full">
                    <LeftSideBar />
                    <MainContent />
                </div>
                {/* {this.state.data == false && <LoadingIcon />} */}
            </main>
        );
    }
}

export default DashboardView;
