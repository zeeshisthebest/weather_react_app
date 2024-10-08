import React from "react";

const OtherLocationCard = ({ loc, weather, temp, icon }) => {
    return (
        <div className="bg-black bg-opacity-30 border border-gray-600 w-full h-44 rounded-3xl backdrop-blur-sm p-4 box-border grid grid-cols-2 grid-rows-2 gap-y-2 text-gray-200 hover:shadow-md hover:shadow-gray-600 duration-200  select-none">
            <div className="col-span-1">
                <img
                    src={`assets/weather_icons/${icon}.png`}
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            <div
                className="col-span-1 text-5xl text-center"
                style={{ lineHeight: "4rem" }}>
                {temp}&deg;
            </div>
            <div className="col-span-2 pt-2">
                <p className="font-semibold text-lg" style={{ lineHeight: "32px" }}>
                    {loc}
                </p>
                <p className="font-light text-sm text-gray-400">Thunderstorms</p>
            </div>
        </div>
    );
};

export default OtherLocationCard;
