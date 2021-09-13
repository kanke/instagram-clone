import React from 'react';
import './Sidebar.css';
import Avatar from "@material-ui/core/Avatar";
import {Button, Styles, WordContainer} from "./Styles";
import {makeStyles} from "@material-ui/core";

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
    const followProp = props.following
    return (
        <div>
            {followProp ?
                (<Styles>
                    <Avatar alt="Mando" src="https://imgur.com/5xBC9OQ.jpeg"/>
                    <WordContainer>
                        <a href="/" className="username small push">mando</a>
                        <p className="name small">Followed by asokha + 5 more</p>
                    </WordContainer>
                    <Button className="ok">Follow</Button>
                </Styles>
                ) :
                (<Styles>
                    <Avatar alt="Baby Yoda" src="https://imgur.com/VCpS8cd.jpeg" className={classes.large}/>
                    <WordContainer>
                        <a href="/" className="username">babyyoda</a>
                        <p className="name">Baby Yoda</p>
                    </WordContainer>
                    <Button>Switch</Button>
                </Styles>)
            }
        </div>
    );
}

export default User;