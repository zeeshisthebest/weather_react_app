import PropTypes from "prop-types";
import React from "react";

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
    hiTemp: PropTypes.number.isRequired,
    lowTemp: PropTypes.number.isRequired,
};

export default HiLow;
