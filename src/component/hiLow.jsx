import PropTypes from "prop-types";
import React from "react";

/**
 * Component to show High and Low temperature for the day
 */
const HiLow = ({ hiTemp, lowTemp }) => {
    return (
        <>
            <div className="bg-white bg-opacity-15 h-fit rounded-full border-gray-400 border flex justify-center gap-6 py-0">
                <span>H:</span>
                <span className="text-white">{hiTemp}&deg;</span>
            </div>
            <div className="bg-white bg-opacity-15 h-fit rounded-full border-gray-400 border flex justify-center gap-6 py-0">
                <span>L:</span>
                <span className="text-white">{lowTemp}&deg;</span>
            </div>
        </>
    );
};

HiLow.propTypes = {
    /**
     * Highest Temparature of the day
     */
    hiTemp: PropTypes.number.isRequired,
    /**
     * Lowest Temparature of the day
     */
    lowTemp: PropTypes.number.isRequired,
};

export default HiLow;
