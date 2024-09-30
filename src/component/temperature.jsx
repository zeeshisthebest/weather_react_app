import React, { Component } from "react";


class Temprature extends Component {
    state = {};
    render () {
        return (
            <div className="row-span-1 flex flex-nowrap text-gray-300">
                <div className="flex gap-6 w-8/12">
                    <div className="text-8xl" style={{ lineHeight: "96px" }}>
                        18
                        <span className="text-xl align-top mt-2 inline-block cursor-pointer hover:text-blue-400">&deg;C</span>
                        <span className="text-xl align-top mt-2 inline-block select-none">&nbsp;|&nbsp;</span>
                        <span className="text-xl align-top mt-2 inline-block cursor-pointer hover:text-blue-400 font-bold">&deg;F</span>
                    </div>
                    <div className="w-32 text-center text-slate-300 text-lg flex flex-col justify-evenly p-2 items-stretch gap-1">
                        <div className="bg-white bg-opacity-15 h-fit rounded-full border-gray-400 border flex justify-center gap-6 py-0">
                            <span>H:</span>
                            <span className="text-white">29&deg;</span>
                        </div>
                        <div className="bg-white bg-opacity-15 h-fit rounded-full border-gray-400 border flex justify-center gap-6 py-0">
                            <span>L:</span>
                            <span className="text-white">20&deg;</span>
                        </div>
                    </div>
                </div>
                <div className="py-1 flex flex-col justify-center w-4/12">
                    <p className="text-justify">
                        With the real time data and advance technology,
                        we provide reliable forcasts for any location around the world.
                    </p>
                </div>
            </div>
        );
    }
}

export default Temprature;
