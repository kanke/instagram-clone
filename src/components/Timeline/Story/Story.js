import React from 'react';
import './Story.css';
import Avatar from "@material-ui/core/Avatar";
import {avatarSize} from "../../../styles/Styles";
import $ from 'jquery';
import {useAsync} from 'react-async';
import fetchStories from "../../../api/stories";


const scroll = (direction) => {
    let far = $('.image-container').width() / 2 * direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate({scrollLeft: pos}, 1000)
}

const Story = () => {
    const classes = avatarSize();
    const {data, error, isLoading} = useAsync({promiseFn: fetchStories})
    if (isLoading) return "..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <div className="story-container">
                <div className="main">
                    <div className="wrapper">
                        <a className="prev" onClick={() => {
                            scroll(-1);
                        }}>&#10094;</a>
                        <div className="image-container">
                            {data.map((profile, index) => (
                                <div className="image" key={index}>
                                    <Avatar alt="test" src={profile.profile_picture} className={classes.timeline}/>
                                    <p className="text">{profile.profile_name}</p>
                                </div>
                            ))}
                        </div>
                        <a className="prev" onClick={() => {
                            scroll(1);
                        }}>&#10095;</a>
                    </div>
                </div>
            </div>
        );
}

export default Story;
