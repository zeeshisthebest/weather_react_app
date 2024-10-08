import React, { Component } from "react";

import WeeklyWeatherGraph from "./weeklyWeatherGraph";
import {
    getWeekDays,
    getWeeklyWeather,
    mapWeeklyWeatherToModel,
} from "../services/weeklyWeatherService";
import { toast } from "react-toastify";

class WeeklyWeather extends Component {
    state = {
        weekDays: [],
        weeklyWeather: [],
        dataForDisplay: [],
    };

    indexForToday = 0;

    populateWeather = async () => {
        try {
            let resp = await getWeeklyWeather("karachi");
            let wthr = mapWeeklyWeatherToModel(resp.data.forecast.forecastday);
            this.setState({
                weeklyWeather: wthr,
            });
            this.populateArray();
        } catch (error) {
            toast.error("Error! Failed to get weekly Weather Updates");
        }
    };

    populateArray = () => {
        let data = [];
        this.state.weeklyWeather.forEach((tmp) => {
            if (this.props.useMetric) {
                data.push(tmp.minC)
                data.push(tmp.maxC);
            } else {
                data.push(tmp.minF);
                data.push(tmp.maxF);
            }
        });
        this.setState({
            dataForDisplay: data,
        });
    };

    componentDidMount () {
        this.populateWeather();
        let weekDays = getWeekDays(this.indexForToday);
        this.setState({ weekDays });
    }

    componentDidUpdate (prevProps) {
        if (prevProps.useMetric !== this.props.useMetric) {
            this.populateArray();
        }

        if (prevProps.location !== this.props.location) {
            this.populateWeather();
        }
    }

    render () {
        const { weekDays, dataForDisplay, weeklyWeather } = this.state;
        return (
            <div className="row-span-2 grid grid-cols-7 grid-rows-4 justify-center align-middle items-center w-full text-gray-400 overflow-visible">
                {/* Name of the days */}
                {weekDays.map((day, ind) => {
                    let cls = "w-full text-center text-xl col-span-1 ";
                    if (ind === this.indexForToday) cls += " font-bold text-gray-100";
                    return (
                        <div key={ind} className={cls}>
                            {ind === this.indexForToday ? "Today" : day}
                        </div>
                    );
                })}

                {/* Daily Graph */}
                <div className="w-full h-full col-span-7 row-span-2 overflow-visible">
                    <WeeklyWeatherGraph
                        data={dataForDisplay}
                        currentDay={this.indexForToday}
                    />
                </div>

                {/* Daily temperature */}
                {weeklyWeather.map((temp, ind) => {
                    let cls = "w-full text-center col-span-1 font-bold text-xl self-end";
                    if (ind === this.indexForToday) cls += " text-gray-100";
                    return (
                        <div className={cls} key={ind}>
                            {this.props.useMetric ? temp.maxC : temp.maxF}&deg;
                            <br />
                            {this.props.useMetric ? temp.minC : temp.minF}&deg;
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WeeklyWeather;
