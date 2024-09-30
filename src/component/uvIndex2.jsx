import React from "react";
import GaugeChart from "react-gauge-chart";

const UvIndex2 = () => {
    return (
        <div className="w-full my-3">
            <GaugeChart
                id="gauge-chart2"
                cornerRadius={4}
                nrOfLevels={30}
                percent={0.6}
                arcPadding={0.045}
                arcWidth={0.15}
                // hideText={true}
                needleScale={0.6}
                colors={["#ffffff20", "#ccEEff"]}
                needleBaseColor="#999"
                needleColor="#BBB"
                textComponent={
                    <p className="text-white font-normal absolute top-16 left-32 text-lg">
                        5.5<sup className="text-xs font-semibold">uv</sup>
                    </p>
                }
            />
            <div className=' mx-7 text-slate-300 text-base text-center flex justify-between'>
                <span>&nbsp;&nbsp;0</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UV Index</span>
                <span>12&nbsp;</span>
            </div>
        </div>
    );
};

export default UvIndex2;
