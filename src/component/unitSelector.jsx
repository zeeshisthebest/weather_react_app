import React from "react";

/**
 *
 * @param {string} unit unit to be displayed
 * @param {bool} isSlctd if it is selected then it will be rendered bold and slight blue
 * @param {func} onUnitSelect
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
 *
 * @param {*} param0
 * @returns
 */
const UnitSelector = ({ isMetric, onUnitSelect }) => {
    return (
        <>
            {getUnit("C", isMetric, () => {
                onUnitSelect(true);
                console.log("celcuis");
            })}
            <span className="text-xl align-top mt-2 inline-block select-none">
                &nbsp;|&nbsp;
            </span>
            {getUnit("F", !isMetric, () => {
                onUnitSelect(false);
                console.log("farhaein");
            })}
        </>
    );
};

export default UnitSelector;
