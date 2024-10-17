import React from "react";
import AirQuality from "./airQuality";
import WindSpeed from "./windSpeed";
import PropTypes from "prop-types";

/**
 * Displays current windspeed and the AirQuality Indexs
 *
 * @param {number} windspeed Windspeed of the location
 * @param {Object} airIndex AirIndex object returned from the API
 * @returns
 */
const WindAndAirIndex = ({ windSpeed, airIndex }) => {
    return (
        <div className="w-full mt-6">
            <WindSpeed windSpeed={windSpeed} />
            <AirQuality airQuality={airIndex} />
        </div>
    );
};

WindAndAirIndex.propTypes = {
    windSpeed: PropTypes.number.isRequired,
    airIndex: PropTypes.number.isRequired,
};

export default WindAndAirIndex;
