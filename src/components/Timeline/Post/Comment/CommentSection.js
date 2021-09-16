import React from "react";
import './CommentSection.css';

const CommentSection = (props) => {
    const post = props.post;
    const commentLength = post.comments.length;
    if (commentLength > 0) {
        return (
            <div className="all-comments">
                <table>
                    <tr>
                        <div className="comment-caption">
                            <a href="/">
                                <strong>{post.profile_name}</strong>
                            </a>
                            <span>{post.post_text}</span>
                        </div>
                        <a href="/" className="comment-title">
                            {(commentLength > 1) ? `View all ${commentLength} comments` : `View all ${commentLength} comment`} </a>
                        {post.comments.map((comment, index) => (
                            <div key={index}>
                                <td>
                                    <a href="/">
                                        <strong>{comment.username}</strong>
                                    </a>
                                    <span>{comment.text}</span>
                                </td>
                            </div>
                        ))}
                    </tr>
                </table>
            </div>
        )
    }
}
export default CommentSection;