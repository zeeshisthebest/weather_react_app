import React, { useContext } from "react";
import UnitSelector from "./unitSelector";
import PropTypes from "prop-types";
import HiLow from "./hiLow";
import { UseMetricsContext, WeatherContext } from "../contexts/contexts";

/**
 * Displays Current weather, buttons to switch from celcius to Farenheit and vice versa,
 * Hi and Low temps
 *
 * @param {number} props.tempC Temparature in Celcius
 * @param {number} props.tempF Temparature in Farenheit
 */
const Temprature = (props) => {

    const metricCtxt = useContext(UseMetricsContext);
    const weatherCtxt = useContext(WeatherContext);
    let currentTemp = metricCtxt.metric ? props.tempC : props.tempF;
    currentTemp = Math.round(currentTemp);
    let hi = metricCtxt.metric ? weatherCtxt.minMax.maxC : weatherCtxt.minMax.maxF;
    let low = metricCtxt.metric ? weatherCtxt.minMax.minC : weatherCtxt.minMax.minF;

    /**
     *
     * @param {bool} val sets the unit to be metric or not
     */
    const handleUnitSelect = (val) => {
        metricCtxt.onChange(val);
    };

    return (
        <div className="row-span-1 flex flex-nowrap text-gray-300">
            <div className="flex gap-6 w-8/12">
                <div className="text-8xl" style={{ lineHeight: "96px" }}>
                    {currentTemp}
                    <UnitSelector isMetric={metricCtxt.metric} onUnitSelect={handleUnitSelect} />
                </div>
                <div className="w-32 text-center text-slate-300 text-lg flex flex-col justify-evenly p-2 items-stretch gap-1">
                    <HiLow hiTemp={hi ?? 0} lowTemp={low ?? 0} />
                </div>
            </div>
            <div className="py-1 flex flex-col justify-center w-4/12">
                <p className="text-justify">
                    With the real time data and advance technology, we provide reliable
                    forcasts for any location around the world.
                </p>
            </div>
        </div>
    );
};

Temprature.propTypes = {
    tempC: PropTypes.number.isRequired,
    tempF: PropTypes.number.isRequired
};

export default Temprature;
