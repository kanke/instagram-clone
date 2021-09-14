import React from 'react';
import '../User/User.css';
import Avatar from "@material-ui/core/Avatar";
import {Button, Styles, WordContainer} from "../../../styles/Styles";
import {makeStyles} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

//For avatar
const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function User(props) {
    const classes = useStyles();
    const followProp = props.following;
    const name = props.name;
    const username = props.username;
    const text = props.text;
    const imgSrc = props.src;
    const postProp = props.post;

    return (
        <div>
            {followProp || postProp ?
                (<Styles>
                        <Avatar alt={name} src={imgSrc}/>
                        <WordContainer>
                            <a href="/" className="username small push">{username}</a>
                            <p className="name small">{text}</p>
                        </WordContainer>
                        { postProp ? (<Button className="dots"><MoreHorizIcon /></Button>) : (<Button className="ok">Follow</Button>)}
                    </Styles>
                ) :
                (<Styles>
                    <Avatar alt={name} src={imgSrc} className={classes.large}/>
                    <WordContainer>
                        <a href="/" className="username padding-username">{username}</a>
                        <p className="name padding-name">{name}</p>
                    </WordContainer>
                    <Button>Switch</Button>
                </Styles>)
            }
        </div>
    );
}

export default User;