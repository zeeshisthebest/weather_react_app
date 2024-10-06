import React from "react";
import PropTypes from "prop-types";

const SunriseSunset = ({ sunriseTime, sunsetTime, is24=false }) => {
    return (
        <div className="w-full flex flex-nowrap mt-7 mb-0 justify-around  gap-0">
            <div className="text-center">
                <img src="/assets/weather_icons/sunset1.png" alt="" className="mx-auto h-10" />
                <p className="text-center text-gray-400 text-sm">Sunset</p>
                <p className="text-gray-200 text-center font-bold text-lg">{sunriseTime}</p>
            </div>
            <div className="text-center">
                <img src="/assets/weather_icons/sunrise.png" alt="" className="h-10 mx-auto " />
                <p className="text-center text-gray-400 text-sm">Sunrise</p>
                <p className="text-gray-200 text-center font-bold text-md">{sunsetTime}<br /></p>
            </div>
        </div>
    );
};

SunriseSunset.propTypes = {
    sunriseTime: PropTypes.string.isRequired,
    sunsetTime: PropTypes.string.isRequired
}

export default SunriseSunset;
