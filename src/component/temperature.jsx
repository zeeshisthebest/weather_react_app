import React, { useEffect, useState } from "react";
import UnitSelector from "./unitSelector";
import PropTypes from "prop-types";
import HiLow from "./hiLow";

const cToF = (temp) => {
    return temp * (9 / 5) + 32;
};

const Temprature = (props) => {
    const [isMetric, setMetricState] = useState(true);
    const [temperature, setTemparature] = useState({ tempC: 0, tempF: 32 });
    const hi = 32;
    const low = 23;

    // Handles the change of temperature upon unit select
    const handleUnitSelect = (changeToMetric) => {
        setMetricState(changeToMetric);
    };

    // As soon as fetched from the API
    useEffect(() => {
        setTemparature({
            tempC: props.temperature,
            tempF: cToF(props.temperature),
        });
    }, [props.temperature]);

    return (
        <div className="row-span-1 flex flex-nowrap text-gray-300">
            <div className="flex gap-6 w-8/12">
                <div className="text-8xl" style={{ lineHeight: "96px" }}>
                    {isMetric ? temperature.tempC : temperature.tempF}
                    <UnitSelector isMetric={isMetric} onUnitSelect={handleUnitSelect} />
                </div>
                <div className="w-32 text-center text-slate-300 text-lg flex flex-col justify-evenly p-2 items-stretch gap-1">
                    <HiLow hiTemp={isMetric ? hi : cToF(hi)} lowTemp={isMetric ? low : cToF(low)} />
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
