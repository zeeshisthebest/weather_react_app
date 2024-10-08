import React, { Component } from "react";

import WeeklyWeatherGraph from "./weeklyWeatherGraph";

class WeeklyWeather extends Component {
    state = {};

    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    render () {
        const currentDay = new Date().getDay();
        const data = [28, 27, 24, 22, 12, 28, 10];
        return (
            <div className="row-span-2 grid grid-cols-7 grid-rows-4 justify-center align-middle items-center w-full text-gray-400 overflow-visible">
                {/* Name of the days */}
                {this.days.map((day, ind) => {
                    let cls = "w-full text-center text-lg col-span-1 ";
                    if (currentDay === ind) cls += " font-bold text-gray-100";
                    return <div key={ind} className={cls}>{day}</div>;
                })}

                {/* Daily Graph */}
                <div className="w-full h-full col-span-7 row-span-2 overflow-visible">
                    <WeeklyWeatherGraph data={data} currentDay={currentDay} />
                </div>

                {/* Daily temperature */}
                {data.map((temp, ind) => {
                    let cls = "w-full text-center col-span-1 font-bold text-3xl self-end";
                    if (ind === currentDay) cls += " text-gray-100";
                    return <div className={cls} key={ind}>{temp}&deg;</div>;
                })}
            </div>
        );
    }
}

export default WeeklyWeather;
