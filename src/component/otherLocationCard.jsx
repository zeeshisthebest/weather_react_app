import React, { useCallback, useContext, useEffect, useState } from "react";
import currentWeatherService from "../services/currentWeatherService";
import { toast } from "react-toastify";
import { UseMetricsContext } from "../contexts/contexts";

const OtherLocationCard = ({ loc, icon }) => {

    const [wthr, setWeather] = useState({});
    const metricCtxt = useContext(UseMetricsContext);

    const getWeather = useCallback(async () => {
        try {
            let resp = await currentWeatherService.getCurrentWeather(loc);
            let mdl = currentWeatherService.mapToRecentModel(resp.data);
            console.log(mdl);
            setWeather(currentWeatherService.mapToRecentModel(resp.data));
        } catch (error) {
            console.log(error);
            toast.error("Unable to load Recent");
        }
    }, [loc]);

    useEffect(() => {
        getWeather();
    }, [loc]);


    let temp = metricCtxt.metric ? wthr.tempC : wthr.tempF;

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
                {Math.round(temp)}&deg;
            </div>
            <div className="col-span-2 pt-2 w-full">
                <p className="font-semibold text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                    {`${wthr.name ?? ""}, ${wthr.country ?? ""}`}
                </p>

                <p className="font-light text-sm text-gray-400">{wthr.condition ?? ""}</p>
            </div>
        </div>
    );
};

export default OtherLocationCard;
