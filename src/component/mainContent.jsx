import React, { Component } from "react";
import LocationAndInfo from "./locationAndInfo";
import Temprature from "./temperature";
import WeatherDecription from "./weatherDesc";
import WeeklyWeather from "./weeklyWeather";
import { UseMetricsContext, WeatherContext } from "../contexts/contexts";
import localStorageService from "../services/localStorageService";

class MainContent extends Component {
    static contextType = WeatherContext;
    state = { useMetric: true };

    /**
     *
     * @param {bool} val true for using metrics false
     */
    handleUnitChange = (val) => {
        this.setState({
            useMetric: val,
        });
        localStorageService.setMetricPreference(val);
    };

    componentDidMount () {
        this.setState({
            useMetric: localStorageService.getMetricPreference()
        });
    }


    render () {
        const { location, weather } = this.context.data;
        const { useMetric } = this.state;
        return (
            <UseMetricsContext.Provider
                value={{
                    metric: useMetric,
                    onChange: this.handleUnitChange,
                }}>
                <div className="col-span-4 grid grid-rows-6 w-full h-full">
                    <LocationAndInfo
                        location={`${location?.name ?? ""}${location?.region ? ", "+location?.region : ""}, ${location?.country ?? ""}`}
                        isMetric={useMetric}
                        visibility={useMetric ? weather?.visKm ?? 0 : weather?.visMi ?? 0}
                        feelsLike={useMetric ? weather?.feelC ?? 0 : weather?.feelF ?? 0}
                        humidity={weather?.humidity ?? 0}
                    />
                    <Temprature tempC={weather?.tempC ?? 0} tempF={weather?.tempF ?? 0} />
                    <WeatherDecription condition={weather?.condition ?? ""} />
                    <WeeklyWeather useMetric={this.state.useMetric} />
                </div>
            </UseMetricsContext.Provider>
        );
    }
}

export default MainContent;
