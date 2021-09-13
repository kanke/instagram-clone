import React from 'react';
import User from "./User";
import './Sidebar.css';
import Suggestions from "./Suggestions";
import Footer from "./Footer";

function Sidebar() {
return (
    <div className="two">
        <User />
        <Suggestions />
        <Footer />
    </div>
);

}

export default Sidebar;