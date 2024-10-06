import React, { Component } from "react";
import LeftSideBar from "./leftSideBar";
import MainContent from "./mainContent";

class DashboardView extends Component {

    weathers = {
        clearNight: "assets/img/clear_night.jpeg",
        cloudyDay: "assets/img/cloudy_day",
        cloudyEvening: "assets/img/cloudy_evening.jpg",
        cloudyNight: "assets/img/cloudy_night.jpg",
        stormyNight: "assets/img/stormy_night.jpg",
        sunnyDay: "assets/img/sunny_day.jpg",
        stormyDay: "assets/img/thunderstorm_day.jpg",
        windstorm: "assets/img/windstorm.jpg",
    };

    state = {
        weatherBg: this.weathers.clearNight
    };

    updateBg = () => {
        setTimeout(() => {
            this.setState({
                weatherBg: this.weathers.cloudyEvening
            })
        }, 10000)
    }


    render () {

        let weatherBg = `url(${this.state.weatherBg})`;

        return (
            <main className='bg-black bg-[image:var(--weather-bg-img)] bg-center bg-cover bg-opacity-30 w-4/5 h-4/5 rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center'
                style={{ '--weather-bg-img': weatherBg }}
            >
                <div className="grid grid-cols-5 gap-9 w-full h-full">
                    <LeftSideBar />
                    <MainContent />
                </div>
            </main>
        );
    }
}

export default DashboardView;
