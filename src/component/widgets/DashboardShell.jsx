import React from "react";
import PropTypes from "prop-types";

const DashboardShell = ({ weatherBg, dashboardRef, children }) => (
    <main
        className="bg-black bg-[image:var(--weather-bg-img)] bg-center bg-cover bg-opacity-30 min-w-[1400px] max-w-[1400px] min-h-[600px] rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center relative overflow-hidden transition-all duration-700 delay-700"
        style={{ "--weather-bg-img": `url(${weatherBg})` }}
        ref={dashboardRef}>
        {children}
    </main>
);

DashboardShell.propTypes = {
    weatherBg: PropTypes.string.isRequired,
    dashboardRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]).isRequired,
    children: PropTypes.node.isRequired,
};

export default DashboardShell;
