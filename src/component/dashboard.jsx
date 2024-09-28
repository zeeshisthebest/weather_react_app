import React, { Component } from "react";
import LeftSideBar from "./leftSideBar";
import MainContent from "./mainContent";

class DashboardView extends Component {
    state = {};
    render () {
        console.log(process.env.PUBLIC_URL);

        const mainClasses = `bg-black bg-[image:url("../public/assets/img/clear_night.jpeg")] bg-center bg-opacity-40 w-4/5 h-4/5 rounded-3xl shadow-lg shadow-black px-9 py-12 bg-blend-overlay flex justify-center items-center`;

        return (
            <main className={mainClasses}>
                <div className="grid grid-cols-5 gap-9 w-full h-full">
                    <LeftSideBar />
                    <MainContent />
                </div>
            </main>
        );
    }
}

export default DashboardView;
