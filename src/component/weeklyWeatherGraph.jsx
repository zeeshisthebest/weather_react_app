import { ChartsReferenceLine, LineChart, lineElementClasses, markElementClasses, } from "@mui/x-charts";
import PropTypes from "prop-types";
import React from "react";

/**
 * Line graph for the weekly Weather
 *
 * @param {Object} data Data for the whole week
 * @param {number} currentDay Position of the Today in the week
 */
const WeeklyWeatherGraph = ({ data: weeklyWeather, currentDay }) => {
    const low = weeklyWeather.length === 0 ? 0 : Math.min(...weeklyWeather); // Lowest of the week
    const high = weeklyWeather.length === 0 ? 0 : Math.max(...weeklyWeather); //Highet of the week
    let avg = (low + high) / 2;

    return (
        <div className="h-full overflow-visible">
            <LineChart
                xAxis={[
                    {
                        data: [0, 0.1, 0.5, 1, 1.6, 2.25, 2.75, 3.4, 3.8, 4.4, 4.8, 5.45, 5.9, 6.5, 7, 7.5]
                    }
                ]}
                yAxis={[{
                    min: low - 4,
                    max: high + 4
                }]}
                series={[
                    {
                        data: [avg, ...weeklyWeather, avg],
                        color: "#ccc",
                        showMark: ({ index }) => index === currentDay + 2,
                        disableHighlight: true,
                    },
                ]}
                leftAxis={null}
                bottomAxis={null}
                margin={{ top: 5, bottom: 5, right: 5, left: 5 }}
                height={110}
                tooltip={{ trigger: 'none' }}

                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        stroke: '#ccc',
                        strokeWidth: 2,
                    },
                    [`& .${markElementClasses.root}`]: {
                        stroke: '#555',
                        scale: '5',
                        fill: 'url("#myGradient")',
                        strokeWidth: 0,
                    },
                }}
            >
                <defs>
                    <radialGradient id="myGradient" >
                        <stop offset="5%" stopColor="white" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <ChartsReferenceLine
                    x={currentDay + 0.5}
                    label=""
                    lineStyle={{ stroke: 'darkgray', strokeDasharray: 7 }}
                />
            </LineChart>
        </div>
    );
};

WeeklyWeatherGraph.propTypes = {
    data: PropTypes.array.isRequired,
    currentDay: PropTypes.number.isRequired
}

export default WeeklyWeatherGraph;
