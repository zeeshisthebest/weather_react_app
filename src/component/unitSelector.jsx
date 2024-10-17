import React from "react";

/**
 *
 * @param {string} unit Unit to be displayed
 * @param {bool} isSlctd If it is selected
 * @param {func} onUnitSelect Callback function to change the unit
 * @returns
 */
const getUnit = (unit, isSlctd, onUnitSelect) => {
    let twClass =
        "text-xl align-top mt-2 inline-block underline-offset-2 select-none";

    if (!isSlctd) twClass += " cursor-pointer hover:text-blue-400";

    return (
        <span className={twClass} onClick={isSlctd ? null : onUnitSelect}>
            &deg;
            <span className={isSlctd ? " border-b-2 font-bold" : null}>{unit}</span>
        </span>
    );
};

/**
 * Shows selected unit and gives the ability to change it
 *
 * @param {bool} props.isMetric If metric is selected
 * @param {func} onUnitSelect Callback function to update the state in parent
 *
 */
const UnitSelector = ({ isMetric, onUnitSelect }) => {
    return (
        <>
            {getUnit("C", isMetric, () => onUnitSelect(true))}
            <span className="text-xl align-top mt-2 inline-block select-none">
                &nbsp;|&nbsp;
            </span>
            {getUnit("F", !isMetric, () => onUnitSelect(false))}
        </>
    );
};

export default UnitSelector;
