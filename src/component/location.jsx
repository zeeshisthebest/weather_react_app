import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDroplet,
    faLocationDot,
    // faSearch,
    faEye,
    faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

class Location extends Component {
    state = {};
    render () {
        return (
            <div className="flex flex-nowrap row-span-1">
                <div
                    className="gap-2 flex text-gray-300 w-8/12 justify-start items-start pt-3"
                    style={{ lineHeight: "16px" }}>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#bcc" }} />
                    <span className="font-semibold">Brooklyn, New York, USA</span>
                    <span className="text-sm">(27th Dec, 2024)</span>
                </div>
                <div className="w-4/12 grid grid-cols-3 grid-rows-1 gap-3">
                    <div className="bg-white bg-opacity-15 rounded-md overflow-hidden p-1">
                        <div className="h-1/3 text-gray-400 text-center flex justify-center items-center text-sm">
                            <p className="mr-2">Humidity</p><FontAwesomeIcon icon={faDroplet} />
                        </div>
                        <div className="flex flex-nowrap gap-1 justify-center items-center pb-1 h-2/3 text-gray-200">
                            <span className="text-5xl font-semibold">
                                100
                                <span className="text-sm">%</span>
                            </span>
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-md overflow-hidden p-1">
                        <div className="h-1/3 text-gray-400 text-center flex justify-center items-center text-sm">
                            <p className="mr-2">Feels Like</p><FontAwesomeIcon icon={faTemperatureLow} />
                        </div>
                        <div className="flex flex-nowrap gap-1 justify-center items-center pb-1 h-2/3 text-gray-200">
                            <span className="text-5xl font-semibold">
                                20
                                <span className="text-sm">&deg;C</span>
                            </span>
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-md overflow-hidden p-1">
                        <div className="h-1/3 text-gray-400 text-center flex justify-center items-center text-sm">
                            <p className="mr-2">Visibility</p><FontAwesomeIcon icon={faEye} />
                        </div>
                        <div className="flex flex-nowrap gap-1 justify-center items-center pb-1 h-2/3 text-gray-200">
                            <span className="text-5xl font-semibold">
                                20
                                <span className="text-sm">km</span>
                            </span>
                        </div>
                    </div>
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
    }
}

export default Location;
