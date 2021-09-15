import React from 'react';
import './Timeline.css';
import Avatar from "@material-ui/core/Avatar";
import {avatarSize} from "../../styles/Styles";
import $ from 'jquery';
import {useAsync} from 'react-async';

const loadStories = async () =>
    await fetch("https://flynn.boolean.careers/exercises/api/boolgram/profiles")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

const scroll = (direction) => {
    let far = $('.image-container').width() / 2 * direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate({scrollLeft: pos}, 1000)
}

const Timeline = () => {
    const classes = avatarSize();

    const {data, error, isLoading} = useAsync({promiseFn: loadStories})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)
        console.log("data " + data)

    return (
        <div className="pee">
            <div className="main">
                <div className="wrapper">
                    <a href="/" className="prev" onClick={() => {
                        scroll(-1);
                    }}>&#10094;</a>
                    <div className="image-container">
                        {data.map((profile) => (
                            <div className="image">
                                <Avatar alt="test" src={profile.profile_picture} className={classes.timeline}/>
                                <span className="text">{profile.profile_name}</span>
                            </div>
                        ))}
                    </div>
                    <a href="/" className="prev" onClick={() => {
                        scroll(1);
                    }}>&#10095;</a>
                </div>
            </div>
        </div>
    );

}

export default Timeline;
