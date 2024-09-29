import React, { Component } from "react";

import Wrapper from "./wrapper";

class WeeklyWeather extends Component {
    state = {};

    render () {
        const data = [28, 27, 24, 22, 12, 28, 10];
        return (
            <div className="row-span-2 grid grid-cols-7 grid-rows-4 justify-center align-middle items-center w-full text-gray-300 overflow-visible">
                <div className="w-full text-center text-lg col-span-1 font-semibold ">Sunday</div>
                <div className="w-full text-center text-lg col-span-1 font-semibold ">Saturday</div>
                <div className="w-full text-center text-lg col-span-1 font-semibold ">Monday</div>
                <div className="w-full text-center text-lg col-span-1 text-gray-100 font-semibold ">Tuesday</div>
                <div className="w-full text-center text-lg col-span-1 font-semibold ">Wednesday</div>
                <div className="w-full text-center text-lg col-span-1 font-semibold ">Thursday</div>
                <div className="w-full text-center text-lg col-span-1 font-semibold ">Friday</div>
                <div className="w-full h-full col-span-7 row-span-2 overflow-visible">
                    <Wrapper data={data} />
                </div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end">28&deg;</div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end">27&deg;</div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end">24&deg;</div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end text-gray-100">22&deg;</div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end">12&deg;</div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end">28&deg;</div>
                <div className="w-full text-center col-span-1 font-bold text-3xl self-end">10&deg;</div>

            </div>
        );
    }
}

export default WeeklyWeather;
