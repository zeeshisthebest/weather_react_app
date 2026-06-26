import React from "react";
import AirQualityGraph from "./AirQualityGraph";

const getAirQualityRemark = (qlty) => {
    if (qlty <= 50) return "Very good";
    if (qlty <= 100) return "Moderate";
    if (qlty <= 150) return "Unhealthy for sensitive";
    if (qlty <= 200) return "Unhealthy";
    if (qlty <= 300) return "Very unhealthy";
    return "Hazardous";
};

function withinRange(props, propName, componentName) {
    componentName = componentName || "ANONYMOUS";

    if (props[propName]) {
        const value = props[propName];
        if (typeof value === "number") {
            return value >= 0 && value <= 500
                ? null
                : new Error(`${propName} in ${componentName} is not within range`);
        }
    }

    return null;
}

const AirQuality = ({ airQuality }) => (
    <div className=" bg-gray-300 bg-opacity-10 py-2 px-2 rounded-md  mt-3 backdrop-blur-sm">
        <div className="flex flex-nowrap gap-2 h-7 text-gray-200 items-center text-xl mb-3">
            <img
                src="assets/weather_icons/windy.png"
                className="h-full w-10"
                alt=""
            />
            <span>Air</span>
            <p className="w-full text-right text-sm text-gray-100 leading-4">
                {getAirQualityRemark(airQuality)}
            </p>
        </div>
        <AirQualityGraph airQuality={airQuality} />
    </div>
);

AirQuality.propTypes = {
    airQuality: withinRange,
};

export default AirQuality;
