import React from 'react';
import './Post.css';
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useAsync} from "react-async";
import {Button} from "../../../styles/Styles";
import User from "../../Sidebar/User/User";

const loadPosts = async () =>
    await fetch("https://flynn.boolean.careers/exercises/api/boolgram/posts")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

const renderComments = (post) => {
    const commentLength = post.comments.length;
    if (commentLength > 0) {
        return (
            <>
                <div className="post-caption">
                <a href="/" className="post-caption comment-title">
                    {(commentLength > 1) ? `View all ${commentLength} comments` : `View all ${commentLength} comment`} </a>
                {post.comments.map((comment, index) => (
                    <div key={index}>
                        <a href="/" className="anchor-nodec">
                            <strong>{comment.username}</strong>
                        </a>
                        {comment.text}
                    </div>
                ))}
                </div>
            </>
        )
    }
}

const Post = () => {
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
                    {/*<Like postId={postId} />*/}
                    {/*<Like postId="1" />*/}
                    <div className="all-comments">
                        <div className="post-caption">
                            <a href="/" className="anchor-nodec">
                                <strong>{post.profile_name}</strong>
                            </a>
                            {post.post_text}
                        </div>
                        {renderComments(post)}
                    </div>
                    <div className="post-time">
                        {/*{timeDifferenceForDate(post.created_at)}*/}
                        {/*{post.date}*/}
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
