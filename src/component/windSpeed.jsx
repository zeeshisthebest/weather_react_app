import PropTypes from 'prop-types';
import React from 'react';

const WindSpeed = ({ windSpeed }) => {
    return (
        <div className="flex flex-nowrap gap-2 h-10 text-gray-200 items-center text-xl bg-gray-300 bg-opacity-10 py-2 px-2 rounded-md backdrop-blur-sm">
            <img
                src="/assets/weather_icons/windy_cloudy.png"
                className="h-full w-10"
                alt=""
            />
            <span>Wind</span>
            <p className="w-full text-right text-2xl">
                {windSpeed}
                <span className="text-sm pl-1">km/h</span>
            </p>
        </div>);
}

WindSpeed.propTypes = {
    windSpeed: PropTypes.number.isRequired
}

export default WindSpeed;
