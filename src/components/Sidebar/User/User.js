import React from 'react';
import '../User/User.css';
import Avatar from "@material-ui/core/Avatar";
import {Button, UserContainer, WordContainer} from "../../../styles/Styles";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const User = (props) => {
    const followProp = props.following;
    const name = props.name;
    const username = props.username;
    const text = props.text;
    const imgSrc = props.src;
    const postProp = props.post;
    const profileProp = props.profile
    const classNameProp = props.className

    return (
        <div>
            {followProp || postProp ?
                (<UserContainer>
                        <Avatar alt={name} src={imgSrc}/>
                        <WordContainer>
                            <a href="/" className="username small username-padding">{username}</a>
                            <p className="name small">{text}</p>
                        </WordContainer>
                        {postProp ? (<Button className="dots-menu-button"><MoreHorizIcon className="dots-menu"/></Button>) : (
                            <Button className="follow-button">Follow</Button>)}
                    </UserContainer>
                ) :
                (<UserContainer>
                    <Avatar alt={name} src={imgSrc} className={classNameProp}/>
                    <WordContainer>
                        <a href="/" className="username padding-username">{username}</a>
                        <p className="name padding-name">{name}</p>
                    </WordContainer>
                    {profileProp ? "" : (
                        (<Button>Switch</Button>))}
                </UserContainer>)
            }
        </div>
    );
}

export default User;