import React from 'react';
import './Post.css';
import User from "../Sidebar/User/User";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {Button} from "../../styles/Styles";
import {useAsync} from "react-async";

const loadPosts = async () =>
    await fetch("https://flynn.boolean.careers/exercises/api/boolgram/posts")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

const Post = () => {
    const index = 2;
    const {data, error, isLoading} = useAsync({promiseFn: loadPosts})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)
        console.log("data " + data)

    return (
        <>
            {/*{data.Post.map((post, index) => (*/}
            <article className="post" key={index}>
                <header className="Post-user">
                    <User post="true" src="https://imgur.com/VCpS8cd.jpeg" name="Baby Yoda" username="babyyoda"
                          text="Chicago, Illinois"/>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        {/*<img alt={post.caption} src={post.url} />*/}
                        <img alt="nsjnas" src="https://imgur.com/5xBC9OQ.jpeg"/>
                    </div>
                </div>
                <div className="post-icons">
                    <FavoriteBorderOutlinedIcon className="post-icons-items" alt="like"/>
                    <ChatBubbleOutlineOutlinedIcon className="post-icons-items" alt="comment"/>
                    <SendOutlinedIcon className="post-icons-items" alt="direct message"/>
                    <TurnedInNotOutlinedIcon className="post-icons-items last" alt="save"/>
                </div>
                {/*<Like postId={postId} />*/}
                {/*<Like postId="1" />*/}
                <div className="Post-caption">
                    {/*<Link className="anchor-nodec" to={"/user/" + post.User.id}>*/}
                    <a href="/" className="anchor-nodec" to={"/user/" + 1}>
                        {/*<strong>{post.User.name}</strong>*/}
                        <strong>knakdkajsbjdkask</strong>
                    </a>
                    {/*&nbsp;{post.caption}*/}
                    gsjhdgajsdjshkdhks
                </div>
                <div className="Post-time">
                    {/*{timeDifferenceForDate(post.created_at)}*/}
                    sajkdkjsdbk
                </div>
                <div className="comment-form-container">
                    <form className="comment-form">
                        <SentimentSatisfiedOutlinedIcon className="comment-form-emoji" alt="emojis"/>
                        <textarea className="comment-form-textarea" aria-label="Add a comment…"
                                  placeholder="Add a comment…"></textarea>
                        {/*<img className="hamburger" src="https://imgur.com/VCpS8cd.jpeg"></img>*/}
                        <Button className="add-comment-button">Post</Button>
                    </form>
                </div>
            </article>
            {/*)*/}
            {/*)}*/}
        </>
    );

}

export default Post;