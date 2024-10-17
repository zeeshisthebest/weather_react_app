import React, { Component } from "react";
import { WeatherContext } from "../contexts/contexts";
import WeeklyWeatherGraph from "./weeklyWeatherGraph";
import { toast } from "react-toastify";
import {
    getWeekDays,
    getWeeklyWeather,
    mapWeeklyWeatherToModel,
} from "../services/weeklyWeatherService";

/**
 * Displays Weather forecast for a week starting from Today
 */
class WeeklyWeather extends Component {
    state = {
        weekDays: [],
        weeklyWeather: [],
        dataForDisplay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        location: "",
    };

    static contextType = WeatherContext;
    indexForToday = 0; // This moves current day position

    /**
     * Fetches the weather from API
     */
    populateWeather = async () => {
        try {
            let resp = await getWeeklyWeather(
                this.context.data?.location?.name ?? ""
            );
            if (!resp) return;
            let wthr = mapWeeklyWeatherToModel(resp.data.forecast.forecastday);
            this.setState({
                weeklyWeather: wthr,
                location: this.context.data?.location?.name ?? "",
            });
            this.populateArray();
            this.context.setMinMax(wthr[0]); // Setting Todays Hi and Low in dashboard state
        } catch (error) {
            toast.error("Couldn't get weekly Weather Updates");
        }
    };

    /**
     * Populates the array from API data for LineGraph and display
     */
    populateArray = () => {
        let data = [];
        this.state.weeklyWeather.forEach((tmp) => {
            if (this.props.useMetric) {
                data.push(tmp.minC);
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

    componentDidUpdate (prevProps, prevState) {
        // Update on unit change
        if (prevProps.useMetric !== this.props.useMetric) {
            this.populateArray();
        }

        //Update on location change
        if (this.context.data?.location?.name !== prevState.location) {
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
