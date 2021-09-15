import React from 'react';
import '../User/User.css';
import Avatar from "@material-ui/core/Avatar";
import {Button, UserContainer, WordContainer, avatarSize} from "../../../styles/Styles";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function User(props) {
    const classes = avatarSize();
    const followProp = props.following;
    const name = props.name;
    const username = props.username;
    const text = props.text;
    const imgSrc = props.src;
    const postProp = props.post;

    return (
        <div>
            {followProp || postProp ?
                (<UserContainer>
                        <Avatar alt={name} src={imgSrc}/>
                        <WordContainer>
                            <a href="/" className="username small push">{username}</a>
                            <p className="name small">{text}</p>
                        </WordContainer>
                        {postProp ? (<Button className="dots"><MoreHorizIcon/></Button>) : (
                            <Button className="ok">Follow</Button>)}
                    </UserContainer>
                ) :
                (<UserContainer>
                    <Avatar alt={name} src={imgSrc} className={classes.large}/>
                    <WordContainer>
                        <a href="/" className="username padding-username">{username}</a>
                        <p className="name padding-name">{name}</p>
                    </WordContainer>
                    <Button>Switch</Button>
                </UserContainer>)
            }
        </div>
    );
}

export default User;