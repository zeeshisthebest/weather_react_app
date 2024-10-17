import React from "react";
import AirQualityGraph from "./AirQualityGraph";


/**
 *
 * @param {number} qlty The AQI index of air
 * @returns A string corresponing to the given AQI
 */
const getAirQualityRemark = (qlty) => {
    if (qlty <= 50) {
        return "Very good";
    } else if (qlty > 50 && qlty <= 100) {
        return "Moderate";
    } else if (qlty > 100 && qlty <= 150) {
        return "Unhealthy for sensitive";
    } else if (qlty > 150 && qlty <= 200) {
        return "Unhealthy";
    } else if (qlty > 200 && qlty <= 300) {
        return "Very unhealthy";
    } else {
        return "Hazardous";
    }
};

/**
 *
 * @param {number} airQuality AQI index, should be withing the range 0 - 500
 *
 */
const AirQuality = ({ airQuality }) => {
    return (
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
};

/**
 * Custom Validator for proptype
 */
function withinRange (props, propName, componentName) {
    componentName = componentName || "ANONYMOUS";

    if (props[propName]) {
        let value = props[propName];
        if (typeof value === "number") {
            return value >= 0 && value <= 500
                ? null
                : new Error(propName + " in " + componentName + " is not within range");
        }
    }

    // assume all ok
    return null;
}

AirQuality.propTypes = {
    /**
     * AQI withing range 0-500
     */
    airQuality: withinRange,
};

export default AirQuality;
