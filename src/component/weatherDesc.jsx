import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import OtherLocationCard from "./otherLocationCard";
import localStorageService from "../services/localStorageService";
import { WeatherContext } from "../contexts/contexts";

/**
 * Displays current condition and Recently searched locations (max 2)
 *
 * @param {string} props.condition Current condition of the weather
 */
const WeatherDecription = ({ condition }) => {
    const [recents, setRecents] = useState([]);
    const wthrCtxt = useContext(WeatherContext);

    useEffect(() => {
        let rcnt = localStorageService.getRecentSearched();
        if (rcnt !== null) setRecents(rcnt.slice(1, 3));
    }, [wthrCtxt.data?.location?.name]);

    return (
        <div className="row-span-2 flex flex-nowrap">
            {/* Weather condition text */}
            <div className="w-8/12 text-6xl flex flex-row justify-start align-middle items-center font-sans font-medium">
                <p className="bg-gradient-to-r from-slate-500 to-slate-100 inline-block bg-clip-text text-transparent pb-2">
                    {condition}
                </p>
            </div>
            {/* Recently Searched */}
            <div className="w-4/12 flex flex-col justify-center gap-2">
                <div className="flex flex-nowrap justify-between text-sm">
                    <p className="text-slate-300">Recently Searched</p>
                    <a href="/" className="text-gray-300 hover:text-blue-300">
                        See all &nbsp;
                        <FontAwesomeIcon
                            icon={faGreaterThan}
                            style={{ fontSize: "11px" }}
                        />
                    </a>
                </div>
                {/* Cards */}
                <div className="flex flex-nowrap gap-4 justify-between">
                    {recents.length > 0 ? (
                        recents.map((rcnt) => (
                            <OtherLocationCard
                                loc={rcnt}
                                key={rcnt}
                                onClick={() => {
                                    wthrCtxt.updateLoc(rcnt);
                                }}
                            />
                        ))
                    ) : (
                        <h2 className="text-gray-300 text-center text-2xl">
                            No Recent Searched
                        </h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherDecription;
