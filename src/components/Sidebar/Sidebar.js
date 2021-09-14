import React from 'react';
import User from "./User/User";
import './Sidebar.css';
import Suggestions from "./Suggestions";
import Footer from "./Footer";

function Sidebar() {
return (
    <div className="two">
        <User src="https://imgur.com/VCpS8cd.jpeg" name="Baby Yoda" username="babyyoda" />
        <Suggestions />
        <Footer />
    </div>
);

}

export default Sidebar;