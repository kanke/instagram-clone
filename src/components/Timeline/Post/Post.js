import React from 'react';
import './Post.css';
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useAsync} from "react-async";
import User from "../../Sidebar/User/User";
import {formatDistance} from 'date-fns';
import CommentSection from "./Comment/CommentSection";
import LikeSection from "./Like/LikeSection";
import {Button} from "../../../styles/Styles";
import fetchPosts from "../../../api/posts";

const Post = () => {
    const {data, error, isLoading} = useAsync({promiseFn: fetchPosts})
    if (isLoading) return "..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <div>
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
                        <LikeSection post={post}/>
                        <CommentSection post={post}/>
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
            </div>
        );
}

export default Post;
