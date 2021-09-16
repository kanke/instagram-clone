import React from 'react';
import './Post.css';
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useAsync} from "react-async";
import {avatarSize, Button} from "../../../styles/Styles";
import User from "../../Sidebar/User/User";
import {formatDistance} from 'date-fns';
import CommentSection from "./Comment/CommentSection";

const loadPosts = async () =>
    await fetch("https://flynn.boolean.careers/exercises/api/boolgram/posts")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())


const renderLikes = (post, classes) => {
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
                        <a className="post-link" alt={firstLikeUser.username} title={firstLikeUser.username} href="/"
                           tabindex="0">{firstLikeUser.username}</a>
                    and
                        <a className="post-link" href="/">others</a>
                    </span>
                </div>
            </>
        )
    }
}
const Post = () => {
    const classes = avatarSize();
    const {data, error, isLoading} = useAsync({promiseFn: loadPosts})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <>
                {data.map((post, index) => (
                    <article className="post" key={index}>
                        <header className="post-user">
                            <User post="true" src={post.profile_picture} name={post.profile_fullname}
                                  username={post.profile_name}
                                  text="Chicago, Illinois"/>
                        </header>
                        <div className="post-image">
                            <div className="post-image-bg">
                                <img alt={post.post_text} src={post.post_image}/>
                            </div>
                        </div>
                        <div className="post-icons">
                            <FavoriteBorderOutlinedIcon className="post-icons-items" alt="like"/>
                            <ChatBubbleOutlineOutlinedIcon className="post-icons-items" alt="comment"/>
                            <SendOutlinedIcon className="post-icons-items" alt="direct message"/>
                            <TurnedInNotOutlinedIcon className="post-icons-items last-icon" alt="save"/>
                        </div>
                        {renderLikes(post, classes)}
                        {/*{renderComments(post)}*/}
                        <CommentSection post={post} />
                        <div className="post-time">
                            {formatDistance(new Date(post.date.date), new Date(), {addSuffix: true})}
                        </div>
                        <div className="comment-form-container">
                            <form className="comment-form">
                                <SentimentSatisfiedOutlinedIcon className="comment-form-emoji" alt="emojis"/>
                                <textarea className="comment-form-textarea" aria-label="Add a comment…"
                                          placeholder="Add a comment…"></textarea>
                                <Button className="add-comment-button">Post</Button>
                            </form>
                        </div>
                    </article>
                ))}
            </>
        );
}

export default Post;
