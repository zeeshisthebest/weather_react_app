import React, { Component } from "react";
import LocationAndInfo from "./locationAndInfo";
import Temprature from "./temperature";
import WeatherDecription from "./weatherDesc";
import WeeklyWeather from "./weeklyWeather";


class MainContent extends Component {
    state = {};
    render () {
        return (
            <div className="col-span-4 grid grid-rows-6 w-full h-full">
                <LocationAndInfo location="Brooklyn, New York, USA" isCelcius={false} visibility={13} feelsLike={23} humidity={80} />
                <Temprature temperature={30} />
                <WeatherDecription />
                <WeeklyWeather />
            </div>
        );
    }
}

export default MainContent;
