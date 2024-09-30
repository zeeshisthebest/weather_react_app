import { Gauge, gaugeClasses, GaugeReferenceArc, GaugeValueArc, useGaugeState } from '@mui/x-charts';
import React, { Component } from 'react';

class UvIndex extends Component {
    state = {}
    // GaugePointer = function () {
    //     const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    //     if (valueAngle === null) {
    //         // No value to display
    //         return null;
    //     }

    //     const target = {
    //         x: cx + outerRadius * Math.sin(valueAngle),
    //         y: cy - outerRadius * Math.cos(valueAngle),
    //     };
    //     return (
    //         <g>
    //             <circle cx={cx} cy={cy} r={2} fill="white" />
    //             <path
    //                 d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
    //                 stroke="white"
    //                 strokeWidth={1}
    //             />
    //         </g>
    //     );
    // }
    render () {
        return (
            <div className='h-32 w-full'>
                <Gauge
                    startAngle={-110}
                    endAngle={110}
                    value={20}
                    text={'4/12'}
                    cornerRadius={'50%'}
                    innerRadius={'85%'}
                    sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 30, color: '#fff !important'
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                            fill: '#52b202', color: '#fff'
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                            fill: theme.palette.text.disabled,
                            color: '#fff'
                        },
                    })}
                    margin={{ top: 10, bottom: 0 }}

                >
                    <GaugeReferenceArc />
                    <GaugeValueArc />
                    {/* <this.GaugePointer /> */}
                </Gauge>
                <p className='text-gray-300 font-semibold text-center top-2'>UV index</p>
            </div>
        );
    }
}

export default UvIndex;
