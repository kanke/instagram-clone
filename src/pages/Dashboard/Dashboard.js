import React from 'react';

import './Dashboard.css';
import Header from "../../components/Header/Header";
import Timeline from "../../components/Timeline/Timeline";

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Timeline />
        </div>
    );
}

export default Dashboard;