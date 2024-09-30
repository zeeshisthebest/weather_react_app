import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class WorldMap extends Component {
    state = {};

    createRoot = function () {
        // Create root element
        var root = am5.Root.new("chartdiv");


        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        // Create the map chart
        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "none",
                projection: am5map.geoOrthographic(),
            })
        );

        // var cont = chart.children.push(
        //     am5.Container.new(root, {
        //         layout: root.horizontalLayout,
        //         x: 170,
        //         y: 250,
        //     })
        // );

        // Add labels and controls
        // cont.children.push(
        //     am5.Label.new(root, {
        //         centerY: am5.p50,
        //         text: "Map",
        //     })
        // );
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panY", "rotateY");

        // cont.children.push(
        //     am5.Label.new(root, {
        //         centerY: am5.p50,
        //         text: "Globe",
        //     })
        // );

        // Create series for background fill
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
        var backgroundSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {})
        );
        backgroundSeries.mapPolygons.template.setAll({
            fill: root.interfaceColors.get("alternativeBackground"),
            fillOpacity: 0,
            strokeOpacity: 0,
        });

        // Add background polygon
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180),
        });
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0.2);
        // Create main polygon series for countries
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        // var polygonSeries =
        chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
            })
        );

        // Create line series for trajectory lines
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
        var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
        lineSeries.mapLines.template.setAll({
            stroke: root.interfaceColors.get("alternativeBackground"),
            strokeOpacity: 0.3,
        });

        // Create point series for markers
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
        var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

        pointSeries.bullets.push(function () {
            var circle = am5.Circle.new(root, {
                radius: 3,
                tooltipY: -10,
                fill: am5.color(0xffba00),
                stroke: root.interfaceColors.get("background"),
                strokeWidth: 1,
                tooltipText: "{title}",
            });

            return am5.Bullet.new(root, {
                sprite: circle,
            });
        });

        let city = {
            title: "Brooklyn",
            latitude: 40.6782,
            longitude: -73.9442,
        };
        chart.animate({ key: "rotationX", to: -city.longitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) })
        chart.animate({ key: "rotationY", to: -city.latitude, duration: 1500, easing: am5.ease.inOut(am5.ease.cubic) })
        pointSeries.data.push({
            geometry: { type: "Point", coordinates: [city.longitude, city.latitude] },
            title: city.title
        });

        chart.appear(1000, 100);


    };

    componentDidMount () {
        am5.array.each(am5.registry.rootElements,
            function (root) {
                if (root.dom.id === "chartdiv") {
                    root.dispose();
                }
            }
        );
        this.createRoot();
    }
    render () {
        return (<div className="w-full" id="">
            <div id="chartdiv" className="h-48"></div>
        </div>);
    }
}

export default WorldMap;
