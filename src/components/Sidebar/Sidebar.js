import React from 'react';
import User from "./User/User";
import Suggestion from "./Suggestion/Suggestion";
import Footer from "./Footer/Footer";


const Sidebar = () => {
return (
    <div className="sidebar-box">
        <User src="https://imgur.com/VCpS8cd.jpeg" name="Baby Yoda" username="babyyoda" />
        <Suggestion />
        <Footer />
    </div>
);

}

export default Sidebar;