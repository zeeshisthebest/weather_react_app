import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDroplet,
    faLocationDot,
    // faSearch,
    faEye,
    faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import InfoCard from "./infoCard";

const LocationAndInfo = ({
    location,
    humidity,
    feelsLike,
    visibility,
    isMetric,
}) => {
    const dateObj = new Date();
    let dateString = dateObj.toDateString().split(' ');
    let date = `( ${dateString[0]} | ${dateString[1]} ${dateString[2]}, ${dateString[3]} )`;

    return (
        <div className="flex flex-nowrap row-span-1">
            <div
                className="gap-2 flex text-gray-300 w-8/12 justify-start items-start pt-3"
                style={{ lineHeight: "16px" }}>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#bcc" }} />
                <span className="font-semibold">{location}</span>
                <span className="text-sm">{date}</span>
            </div>
            <div className="w-4/12 grid grid-cols-3 grid-rows-1 gap-3">
                <InfoCard unit="%" title="Humidity" value={humidity} icon={faDroplet} />
                <InfoCard
                    unit={`\u00b0${isMetric ? "C" : "F"}`}
                    title="Feels Like"
                    value={Math.round(feelsLike)}
                    icon={faTemperatureLow}
                />
                <InfoCard
                    unit={isMetric ? "kM" : "Mi"}
                    title="Visibility"
                    value={Math.round(visibility)}
                    icon={faEye}
                />
            </div>
            {/* <div className="flex flex-nowrap justify-end gap-2 bg-red-400 w-4/12">
            <button className="h-9 w-9 rounded-2xl bg-slate-700 border border-gray-500 hover:bg-slate-600 transition-all duration-100">
                <FontAwesomeIcon icon={faSearch} style={{ color: "#ccc" }} />
            </button>
            <button className="h-9 px-6 rounded-2xl text-gray-300 bg-slate-700 border border-gray-500 hover:bg-slate-600 transition-all duration-100">
                Download App
            </button>

        </div> */}
        </div>
    );
};

LocationAndInfo.propTypes = {
    location: PropTypes.string.isRequired,
    feelsLike: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    isMetric: PropTypes.bool.isRequired,
};

export default LocationAndInfo;
