import React from "react";
import LeftSideBar from "./leftSideBar";
import MainContent from "./mainContent";
import LoadingIcon from "./common/loadingIcon";
import DashboardShell from "./widgets/DashboardShell";
import LastUpdatedBadge from "./widgets/LastUpdatedBadge";
import { WeatherContext } from "../contexts/contexts";
import { useWeatherDashboard } from "../hooks/useWeatherDashboard";

const DashboardView = () => {
    const {
        weatherBg,
        data,
        minMax,
        updatedAt,
        loading,
        dashboardRef,
        setMinMax,
        getWeather,
    } = useWeatherDashboard();

    return (
        <DashboardShell weatherBg={weatherBg} dashboardRef={dashboardRef}>
            <div className="grid grid-cols-5 gap-9 w-full h-full">
                <WeatherContext.Provider
                    value={{
                        data,
                        setMinMax,
                        minMax,
                        updateLoc: getWeather,
                    }}>
                    <LeftSideBar />
                    <MainContent />
                </WeatherContext.Provider>
                <LastUpdatedBadge updatedAt={updatedAt} />
            </div>
            {loading && <LoadingIcon />}
        </DashboardShell>
    );
};

export default DashboardView;
