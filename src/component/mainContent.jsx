import React, { Component } from "react";
import Location from "./location";
import Temprature from "./temperature";
import WeatherDecription from "./weatherDesc";
import WeeklyWeather from "./weeklyWeather";


class MainContent extends Component {
    state = {};
    render () {
        return (
            <div className="col-span-4 grid grid-rows-6 w-full h-full">
                <Location />
                <Temprature />
                <WeatherDecription />
                <WeeklyWeather />
            </div>
        );
    }
}

export default MainContent;
