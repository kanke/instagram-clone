import React from 'react';
import User from "./User/User";
import Suggestion from "./Suggestion/Suggestion";
import Footer from "./Footer/Footer";
import {avatarSize} from "../../styles/Styles";

const Sidebar = () => {
    const classes = avatarSize();
    return (
        <div className="sidebar-box">
            <User profile="true" src="https://imgur.com/VCpS8cd.jpeg" name="Baby Yoda" username="babyyoda"
                  className={classes.large}/>
            <Suggestion/>
            <Footer/>
        </div>
    );

}

export default Sidebar;