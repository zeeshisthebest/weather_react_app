import React from "react";

const SunriseSunset = () => {
    return (
        <div className="w-full flex flex-nowrap mt-7 mb-0 justify-around  gap-0">
            <div className="text-center">
                <img src="/assets/weather_icons/sunset1.png" alt="" className="mx-auto h-10" />
                <p className="text-center text-gray-400 text-sm">Sunset</p>
                <p className="text-gray-200 text-center font-bold text-lg">18:20</p>
            </div>
            <div className="text-center">
                <img src="/assets/weather_icons/sunrise.png" alt="" className="h-10 mx-auto " />
                <p className="text-center text-gray-400 text-sm">Sunrise</p>
                <p className="text-gray-200 text-center font-bold text-md">06:00<br /></p>
            </div>
        </div>
    );
};

export default SunriseSunset;
