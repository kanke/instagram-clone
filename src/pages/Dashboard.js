import React from 'react';

import './Dashboard.css';
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Timeline from "../components/Timeline/Timeline";
import Post from "../components/Post/Post";

function Dashboard() {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="one">
                    <Timeline/>
                </div>
                <Sidebar className="two"/>
                <div className="three">
                    <Post/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;