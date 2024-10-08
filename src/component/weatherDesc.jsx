import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import OtherLocationCard from "./otherLocationCard";

const WeatherDecription = ({ condition }) => {

    return (
        <div className="row-span-2 flex flex-nowrap">
            <div className="w-8/12 text-6xl flex flex-row justify-start align-middle items-center font-sans font-medium">
                <p className="bg-gradient-to-r from-slate-500 to-slate-100 inline-block bg-clip-text text-transparent">
                    {condition}
                </p>
            </div>
            <div className="w-4/12 flex flex-col justify-center gap-2">
                <div className="flex flex-nowrap justify-between text-sm">
                    <p className="text-slate-500">Recently Searched</p>
                    <a href="/" className="text-gray-300 hover:text-blue-300">
                        See all &nbsp;
                        <FontAwesomeIcon
                            icon={faGreaterThan}
                            style={{ fontSize: "11px" }}
                        />
                    </a>
                </div>
                <div className="flex flex-nowrap gap-4 justify-between">
                    <OtherLocationCard loc="Liverpool, UK" temp={17} weather="Thunderstorms" icon="thunderstorm" />
                    <OtherLocationCard loc="Palermo, Italy" temp={9} weather="Cloudy with Sun" icon="snow_sun" />

                </div>
            </div>
        </div>
    );
}

export default WeatherDecription;
