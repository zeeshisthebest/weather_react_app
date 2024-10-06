import React from "react";
import PropTypes from "prop-types";
import { ChartsReferenceLine } from "@mui/x-charts";
import {
    LineChart,
    lineElementClasses,
    markElementClasses,
} from "@mui/x-charts/LineChart";

const lineChartOptions = {
    sx: {
        [`& .${lineElementClasses.root}`]: {
            strokeDasharray: "10 5",
            strokeWidth: 0,
        },
        "& .MuiAreaElement-series-Quality": {
            fill: "url('#airQualityGradient')",
        },
        [`& .${markElementClasses.root}`]: {
            stroke: "#fff",
            scale: "0",
            strokeWidth: 0,
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            stroke: "#f0f0f0",
            strokeWidth: 1,
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
            stroke: "#FFF",
            strokeWidth: 1,
        },
    },
    xAxis: [
        {
            data: [0, 50, 100, 200, 300, 500],
            min: 0,
            max: 500,
            scaleType: "linear",
            tickInterval: [0, 50, 100, 200, 300, 500],
            tickLabelInterval: (val) => val % 100 === 0,
        },
    ],
    yAxis: [{ min: 0, max: 10, }],

    margin: { left: 10, top: 0, right: 10, bottom: 20 },
    height: 40,
    bottomAxis: {
        stroke: "white",
        fill: "white",
        tickLabelStyle: {
            angle: 0,
            textAnchor: "middle",
            fontSize: 10,
            color: "#fff",
            fill: "white",
        },
    },
    leftAxis: null,
    tooltip: { trigger: "none" }
}

const AirQualityGraph = (props) => {
    return (
        <LineChart {...lineChartOptions} series={[
            {
                id: "Quality",
                area: true,
                data: [4, 4, 4, 4, 4, 4],
                showMark: ({ position }) => position === props.airQuality,
                disableHighlight: true,
            },
        ]}>
            <defs>
                <linearGradient id="airQualityGradient">
                    <stop offset="10%" stopColor="#6DDD42" />
                    <stop offset="20%" stopColor="#FBEF51" />
                    <stop offset="30%" stopColor="#EF8232" />
                    <stop offset="40%" stopColor="#EA4024" />
                    <stop offset="60%" stopColor="#721D24" />
                    <stop offset="100%" stopColor="#834592" />
                </linearGradient>
            </defs>
            <ChartsReferenceLine
                x={props.airQuality}
                label={props.airQuality.toString()}
                spacing={{ x: 10 }}
                lineStyle={{ stroke: "white", strokeDasharray: 2, strokeWidth: 2 }}
                labelStyle={{ fontSize: "16px", fill: "white" }}
            />
        </LineChart>
    );
};

AirQualityGraph.propTypes = {
    airQuality: PropTypes.number.isRequired,
};

export default AirQualityGraph;
