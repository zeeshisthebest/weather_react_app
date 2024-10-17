import React, { useCallback, useContext, useEffect, useState } from "react";
import currentWeatherService from "../services/currentWeatherService";
import { toast } from "react-toastify";
import { UseMetricsContext } from "../contexts/contexts";
import logService from "../services/logService";
import { getWeatherIcons } from "../data/weatherCodes";
import SkeletonOtherLocationCard from "./widgets/skeletonOtherLocationCard";
import PropTypes from "prop-types";

/**
 * Displays the brief weather info for given location
 *
 * @param {string} loc The recent location
 * @param {func} onClick callback function for the click event
 *
 */
const OtherLocationCard = ({ loc, onClick }) => {
    const [wthr, setWeatherState] = useState(null);
    const metricCtxt = useContext(UseMetricsContext);

    // Fetches weather for the location of card
    const getWeather = useCallback(async () => {
        try {
            let resp = await currentWeatherService.getCurrentWeather(loc);
            let astro = await currentWeatherService.getAstroData(loc);
            let mdl = currentWeatherService.mapToRecentModel(resp.data, astro.data);
            setWeatherState(mdl);
        } catch (error) {
            logService.log(error);
            toast.error("Unable to load recent weathers");
        }
    }, [loc]);

    useEffect(() => {
        setTimeout(() => {
            getWeather();
        }, 1000);
    }, [getWeather]);

    return wthr ? (
        <div
            className="bg-black bg-opacity-30 border border-gray-600 w-1/2 h-44 rounded-3xl backdrop-blur-sm p-4 box-border grid grid-cols-2 grid-rows-2 gap-y-2 text-gray-200 hover:shadow-md hover:shadow-gray-600 duration-200 select-none cursor-pointer"
            onClick={onClick}>
            <div className="col-span-1">
                <img
                    src={getWeatherIcons(wthr.code, wthr.isSun)}
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            <div
                className="col-span-1 text-5xl text-center"
                style={{ lineHeight: "4rem" }}>
                {Math.round(metricCtxt.metric ? wthr.tempC : wthr.tempF)}&deg;
            </div>
            <div className="col-span-2 pt-2 w-full">
                <p className="font-semibold text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                    {`${wthr.name}, ${wthr.country}`}
                </p>
                <p className="font-light text-sm text-gray-400">{wthr.condition}</p>
            </div>
        </div>
    ) : (
        <SkeletonOtherLocationCard />
    );
};

OtherLocationCard.propTypes = {
    loc: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default OtherLocationCard;
