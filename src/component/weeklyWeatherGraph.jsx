import { ChartsReferenceLine, LineChart, lineElementClasses, markElementClasses, } from "@mui/x-charts";
import PropTypes from "prop-types";
import React from "react";

const WeeklyWeatherGraph = ({ data, currentDay }) => {

    const weeklyWeather = [28, 20, 28, 20, 29, 20, 28];
    const low = Math.min(...weeklyWeather);
    const high = Math.max(...weeklyWeather);
    let avg = (low + high) / 2;

    return (
        <div className="h-full overflow-visible">
            <LineChart
                xAxis={[
                    {
                        data: [0.6, 1, 2, 3, 4, 5, 6, 7, 7.3]
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
                        showMark: ({ index }) => index === currentDay + 1,
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
                    x={currentDay + 1}
                    label=""
                    lineStyle={{ stroke: 'darkgray', strokeDasharray: 7 }}
                />
            </LineChart>
        </div>
    );
};

WeeklyWeatherGraph.propTypes = {
    data: PropTypes.array.isRequired
}

export default WeeklyWeatherGraph;
