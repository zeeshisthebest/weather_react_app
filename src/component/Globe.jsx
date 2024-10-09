import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import PropTypes from "prop-types";

const Globe = ({ placeName, coordinates: { latitude, longitude } }) => {
    useEffect(() => {
        // Create root element
        const root = am5.Root.new("chartdiv");

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        // Create the map chart
        const chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "rotateY",
                projection: am5map.geoOrthographic(),
            })
        );

        // Create background polygon series
        const backgroundSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {})
        );
        backgroundSeries.mapPolygons.template.setAll({
            fill: root.interfaceColors.get("alternativeBackground"),
            fillOpacity: 0.3,
            strokeOpacity: 0,
        });
        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180),
        });

        // Create main polygon series for countries
        chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
            })
        );

        // Create line series for trajectory lines
        const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
        lineSeries.mapLines.template.setAll({
            stroke: root.interfaceColors.get("alternativeBackground"),
            strokeOpacity: 0.3,
        });

        // Create point series for markers
        const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        pointSeries.bullets.push(() => {
            const circle = am5.Circle.new(root, {
                radius: 3,
                tooltipY: -10,
                fill: am5.color(0xffba00),
                stroke: root.interfaceColors.get("background"),
                strokeWidth: 1,
                tooltipText: "{title}",
            });

            return am5.Bullet.new(root, { sprite: circle });
        });

        setTimeout(() => {
            chart.animate({
                key: "rotationX",
                to: -longitude,
                duration: 4000, from: 0,
                easing: am5.ease.inOut(am5.ease.cubic),
            });

            chart.animate({
                key: "rotationY",
                to: -latitude,
                duration: 4000, from: 0,
                easing: am5.ease.inOut(am5.ease.cubic),
            });

            pointSeries.data.push({
                geometry: { type: "Point", coordinates: [longitude, latitude] },
                title: placeName,
            });
        }, 2000);

        // Animate chart appearance
        chart.appear(1000, 100);

        // Clean up resources when component unmounts
        return () => {
            root.dispose();
        };
    });

    return (
        <div className="w-full">
            <div id="chartdiv" className="h-48"></div>
        </div>
    );
};

// Custom validator for latitude
const latitudePropType = (props, propName, componentName) => {
    const value = props.coordinates[propName];
    if (typeof value !== 'number' || value < -90 || value > 90) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Latitude must be a number between -90 and 90.`
        );
    }
    return null;
};

// Custom validator for longitude
const longitudePropType = (props, propName, componentName) => {
    const value = props.coordinates[propName];

    if (typeof value !== 'number' || value < -180 || value > 180) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Longitude must be a number between -180 and 180.`
        );
    }
    return null;
};

Globe.propTypes = {
    placeName: PropTypes.string.isRequired,
    latitude: latitudePropType,
    longitude: longitudePropType
}

export default Globe;
