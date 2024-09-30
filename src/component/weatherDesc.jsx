import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

class WeatherDecription extends Component {
    state = {};
    render () {
        return (
            <div className="row-span-2 flex flex-nowrap">
                <div className="w-8/12 text-6xl flex flex-row justify-start align-middle items-center font-sans font-medium">
                    <p className="bg-gradient-to-r from-slate-500 to-slate-100 inline-block bg-clip-text text-transparent">
                        Clear Skies
                        <br />
                        With little CLouds
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
                        <div className="bg-black bg-opacity-30 border border-gray-600 w-full h-44 rounded-3xl backdrop-blur-sm p-4 box-border grid grid-cols-2 grid-rows-2 gap-y-2 text-gray-200 hover:shadow-md hover:shadow-gray-600 duration-200 hover:-translate-y-1 select-none">
                            <div className="col-span-1">
                                <img
                                    src="assets/weather_icons/thunderstorm.png"
                                    className="w-full h-full object-contain"
                                    alt=""
                                />
                            </div>
                            <div
                                className="col-span-1 text-5xl text-center"
                                style={{ lineHeight: "4rem" }}>
                                17&deg;
                            </div>
                            <div className="col-span-2 pt-2">
                                <p
                                    className="font-semibold text-lg"
                                    style={{ lineHeight: "32px" }}>
                                    Liverpool, UK
                                </p>
                                <p className="font-light text-sm text-gray-400">
                                    Thunderstorms
                                </p>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-30 border border-gray-600 w-full h-44 rounded-3xl backdrop-blur-sm p-4 box-border grid grid-cols-2 grid-rows-2 gap-y-2 text-gray-200 select-none">
                            <div className="col-span-1">
                                <img
                                    src="assets/weather_icons/snow_sun.png"
                                    className="w-full h-full object-contain"
                                    alt=""
                                />
                            </div>
                            <div
                                className="col-span-1 text-5xl text-center"
                                style={{ lineHeight: "4rem" }}>
                                -2&deg;
                            </div>
                            <div className="col-span-2 pt-2">
                                <p
                                    className="font-semibold text-lg"
                                    style={{ lineHeight: "32px" }}>
                                    Palermo, Italy
                                </p>
                                <p className="font-light text-sm text-gray-400">
                                    Cloudy with Sun
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherDecription;
