import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import { SwitchAirbnb } from "../utils/switchStyle.ts";
import localStorageService from "../services/localStorageService.js";
import utils from "../utils/utils.js";

/**
 * Displays Sunset and Sunrise time with the functionality to choose between 24 hrs or 12 hrs
 *
 * @param {string} sunriseTime Time should be in HH:MM <AM|PM> format
 * @param {string} sunsetTime Time should be in HH:MM <AM|PM> format
 *
 */
const SunriseSunset = ({ sunriseTime, sunsetTime }) => {
    const [is24, setIs24] = useState(false);

    // switches time from/to 12 hrs
    const handleHrSwitch = () => {
        let newIs24 = !is24;
        setIs24(newIs24);
        localStorageService.setIs24(newIs24);
    };

    useEffect(() => {
        setIs24(localStorageService.getIs24());
    }, []);

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
                        <Typography sx={{ fontSize: 14, color: "#ccc" }}>24hr</Typography>
                    }
                    color="warning"
                />
            </FormGroup>
            <div className="text-center">
                <img
                    src="assets/weather_icons/sunrise.png"
                    alt=""
                    className="h-10 mx-auto "
                />
                <p className="text-center text-gray-400 text-sm">Sunrise</p>
                <p className="text-gray-200 text-center font-bold text-md">
                    {is24 ? utils.to24(sunriseTime) : sunriseTime}
                </p>
            </div>
            <div className="text-center">
                <img
                    src="assets/weather_icons/sunset1.png"
                    alt=""
                    className="mx-auto h-10"
                />
                <p className="text-center text-gray-400 text-sm">Sunset</p>
                <p className="text-gray-200 text-center font-bold text-md">
                    {is24 ? utils.to24(sunsetTime) : sunsetTime}
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
