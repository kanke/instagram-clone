import React from 'react';
import Post from "./Post/Post";
import Story from "./Story/Story";
import Sidebar from "../Sidebar/Sidebar";

function Timeline() {
    return (
        <div className="wrapper">
            <div className="story-box" data-testid="story-box">
                <Story/>
            </div>
            <Sidebar className="sidebar-box"/>
            <div className="post-box" data-testid="post-box">
                <Post/>
            </div>
        </div>
    );
}

export default Timeline;