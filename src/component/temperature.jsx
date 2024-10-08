import React, { useContext, useEffect, useState } from "react";
import UnitSelector from "./unitSelector";
import PropTypes from "prop-types";
import HiLow from "./hiLow";
import { UseMetricsContext, WeatherContext } from "../contexts/contexts";

const cToF = (temp) => {
    return temp * (9 / 5) + 32;
};

const Temprature = (props) => {
    const [temperature, setTemparature] = useState({ tempC: 0, tempF: 32 });
    const hi = 32;
    const low = 23;

    const tmp = useContext(UseMetricsContext);

    // Handles the change of temperature upon unit select
    const handleUnitSelect = (changeToMetric) => {
        console.log('trigger');

        tmp.onChange(changeToMetric);
    };

    return (
        <div className="row-span-1 flex flex-nowrap text-gray-300">
            <div className="flex gap-6 w-8/12">
                <div className="text-8xl" style={{ lineHeight: "96px" }}>
                    {tmp.metric ? temperature.tempC : temperature.tempF}
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
    temperature: PropTypes.number.isRequired,
};

export default Temprature;
