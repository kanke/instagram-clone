import React from 'react';

import './Dashboard.css';
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="one">Timeline</div>
                <Sidebar className="two"/>
                <div className="three">Posts</div>
            </div>
        </div>
    )
        ;
}

export default Dashboard;