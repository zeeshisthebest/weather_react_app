import React, { useContext } from "react";
import UnitSelector from "./unitSelector";
import PropTypes from "prop-types";
import HiLow from "./hiLow";
import { UseMetricsContext } from "../contexts/contexts";

const cToF = (temp) => {
    return temp * (9 / 5) + 32;
};

const Temprature = (props) => {

    const hi = 32;
    const low = 23;

    const tmp = useContext(UseMetricsContext);

    // Handles the change of temperature upon unit select
    const handleUnitSelect = (val) => {
        tmp.onChange(val);
    };

    let currentTemp = tmp.metric ? props.tempC : props.tempF;
    currentTemp = Math.round(currentTemp);

    return (
        <div className="row-span-1 flex flex-nowrap text-gray-300">
            <div className="flex gap-6 w-8/12">
                <div className="text-8xl" style={{ lineHeight: "96px" }}>
                    {currentTemp}
                    <UnitSelector isMetric={tmp.metric} onUnitSelect={handleUnitSelect} />
                </div>
                <div className="w-32 text-center text-slate-300 text-lg flex flex-col justify-evenly p-2 items-stretch gap-1">
                    <HiLow hiTemp={tmp.metric ? hi : cToF(hi)} lowTemp={tmp.metric ? low : cToF(low)} />
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
