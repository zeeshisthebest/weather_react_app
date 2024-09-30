import React, { Component } from 'react'; import { LineChart, lineElementClasses, markElementClasses, labelStyle } from '@mui/x-charts/LineChart';
import { ChartsReferenceLine } from '@mui/x-charts';

class AirIndex extends Component {
    state = {}

    render () {
        const currentPosition = 370;
        return (
            <LineChart
                dataset={[

                ]}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        strokeDasharray: '10 5',
                        strokeWidth: 0,
                    },
                    '& .MuiAreaElement-series-Quality': {
                        fill: "url('#airQualityGradient')",
                    },
                    [`& .${markElementClasses.root}`]: {
                        stroke: '#fff',
                        scale: '0',
                        strokeWidth: 0,
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: "#f0f0f0",
                        strokeWidth: 1
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
                        stroke: "#FFF",
                        strokeWidth: 1
                    },
                }}
                xAxis={[
                    {
                        data: [0, 50, 100, 200, 300, 500],
                        min: 0,
                        max: 500,
                        scaleType: 'linear',
                        tickInterval: [0, 50, 100, 200, 300, 500],
                        tickLabelInterval: (val) => val % 100 === 0,
                    },
                ]}
                yAxis={[{
                    min: 0,
                    max: 10
                }]}
                series={[
                    {
                        id: 'Quality',
                        area: true,
                        data: [4, 4, 4, 4, 4, 4],
                        showMark: ({ position }) => position === currentPosition,
                        disableHighlight: true,
                    },
                ]}
                margin={{ left: 10, top: 0, right: 10, bottom: 20 }}
                // width={600}
                height={40}
                bottomAxis={
                    {
                        stroke: 'white',
                        fill: 'white',
                        tickLabelStyle: {
                            angle: 0,
                            textAnchor: 'middle',
                            fontSize: 10,
                            color: '#fff',
                            fill: 'white'
                        },
                    }
                }
                leftAxis={null}
                tooltip={{ trigger: 'none' }}

            >
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
                    x={currentPosition}
                    label={currentPosition.toString()}
                    spacing={{ x: '20px' }}
                    lineStyle={{ stroke: 'white', strokeDasharray: 1 }}
                    labelStyle={{ fontSize: '14px', fill: 'white', }}
                />
            </LineChart>
        );
    }
}

export default AirIndex;
