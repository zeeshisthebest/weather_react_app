import React from "react";
import PropTypes from "prop-types";

const getUnit = (unit, isSelected, onUnitSelect) => {
    let twClass =
        "text-xl align-top mt-2 inline-block underline-offset-2 select-none";

    if (!isSelected) twClass += " cursor-pointer hover:text-blue-400";

    return (
        <span className={twClass} onClick={isSelected ? null : onUnitSelect}>
            &deg;
            <span className={isSelected ? " border-b-2 font-bold" : null}>{unit}</span>
        </span>
    );
};

const UnitSelector = ({ isMetric, onUnitSelect }) => (
    <>
        {getUnit("C", isMetric, () => onUnitSelect(true))}
        <span className="text-xl align-top mt-2 inline-block select-none">
            &nbsp;|&nbsp;
        </span>
        {getUnit("F", !isMetric, () => onUnitSelect(false))}
    </>
);

UnitSelector.propTypes = {
    isMetric: PropTypes.bool.isRequired,
    onUnitSelect: PropTypes.func.isRequired,
};

export default UnitSelector;
