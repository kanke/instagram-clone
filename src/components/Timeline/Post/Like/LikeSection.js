import User from "../../../Sidebar/User/User";
import React from "react";
import {avatarSize} from "../../../../styles/Styles";
import './LikeSection.css';

const LikeSection = (props) => {
    const classes = avatarSize();
    const post = props.post
    const likesLength = post.likes.length;
    if (likesLength > 0) {
        const firstLikeUser = post.likes[0];
        return (
            <>
                <div className="post-likes">
                    <User profile="true" src={firstLikeUser.profile_picture}
                          username={firstLikeUser.profile_name} className={classes.small}/>
                    <span className="post-likes-container">
                    Liked by
                        <a className="post-link" alt={firstLikeUser.username} title={firstLikeUser.username} href="/">{firstLikeUser.username}</a>
                    and
                        <a className="post-link" href="/">others</a>
                    </span>
                </div>
            </>
        )
    } else {
        return (<></>)
    }
}

export default LikeSection