import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import { SwitchAirbnb } from "./utils/switchStyle.ts";
import localStorageService from "../services/localStorageService.js";

/**
 *
 * @param {string} time Should be in the format "hh:mm [AM|PM]"
 * @returns Time in 24 hr format
 */

const to24 = (time) => {
    let [time2, amPm] = time.split(" ");
    //Before the data is loaded
    if (!amPm) return time;

    let [hr, min] = time2.split(':');
    if (amPm.toLowerCase() === 'pm') {
        return hr === "12" ? time2 : `${parseInt(hr) + 12}:${min}`;
    } else {
        return hr === '12' ? `00:${min}` : time2;
    }

}


const SunriseSunset = ({ sunriseTime, sunsetTime }) => {
    const [is24, setIs24] = useState(false);

    // switches time from/to AM-PM
    const handleHrSwitch = () => {
        let newIs24 = !is24;
        setIs24(newIs24);
        localStorageService.setIs24(newIs24);
    };

    useEffect(() => {
        setIs24(localStorageService.getIs24());
    }, [])

    return (
        <div className="w-full flex flex-nowrap mt-7 mb-10 justify-around gap-0 relative">
            <FormGroup className="absolute -bottom-8 right-0">
                <FormControlLabel
                    control={
                        <SwitchAirbnb
                            size="small"
                            color="defualt"
                            onChange={handleHrSwitch}
                            checked={is24}
                        />
                    }
                    label={
                        <Typography sx={{ fontSize: 14, color: "#ccc" }}>
                            24hr
                        </Typography>
                    }
                    color="warning"

                />
            </FormGroup>
            <div className="text-center">
                <img
                    src="/assets/weather_icons/sunrise.png"
                    alt=""
                    className="h-10 mx-auto "
                />
                <p className="text-center text-gray-400 text-sm">Sunrise</p>
                <p className="text-gray-200 text-center font-bold text-md">
                    {is24 ? to24(sunriseTime) : sunriseTime}

                </p>
            </div>
            <div className="text-center">
                <img
                    src="/assets/weather_icons/sunset1.png"
                    alt=""
                    className="mx-auto h-10"
                />
                <p className="text-center text-gray-400 text-sm">Sunset</p>
                <p className="text-gray-200 text-center font-bold text-md">
                    {is24 ? to24(sunsetTime) : sunsetTime}

                </p>
            </div>

        </div>
    );
};

SunriseSunset.propTypes = {
    sunriseTime: PropTypes.string.isRequired,
    sunsetTime: PropTypes.string.isRequired,
};

export default SunriseSunset;
