import PropTypes from "prop-types";
import React from "react";
import GaugeChart from "react-gauge-chart";

// Options for the desing of GaugeChart
const guageOptions = {
    id: "gauge-chart2",
    cornerRadius: 4,
    nrOfLevels: 30,
    arcPadding: 0.045,
    arcWidth: 0.15,
    needleScale: 0.6,
    colors: ["#00ff00", "#FF0000"],
    needleBaseColor: "#999",
    needleColor: "#BBB",
    textComponent: (
        <p className="text-white font-normal absolute top-16 left-32 text-lg">
            5.5<sup className="text-xs font-semibold">uv</sup>
        </p>
    ),
};


const UvIndex = ({ uvIndex }) => {
    const uvPercentage = uvIndex / 15;
    return (
        <div className="w-full my-3">
            <GaugeChart {...guageOptions} percent={uvPercentage} />
            <div className="mx-8 text-slate-300 text-base text-center flex justify-between">
                <span>0</span>
                <span>UV Index</span>
                <span>12</span>
            </div>
        </div>
    );
};

UvIndex.propTypes = {
    uvIndex: PropTypes.number.isRequired
}

export default UvIndex;
