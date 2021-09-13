import React from 'react';
import './Sidebar.css';
import Avatar from "@material-ui/core/Avatar";
import {Button, Styles, WordContainer} from "./Styles";

function User() {

    return (
        <Styles>
            <Avatar alt="Baby Yoda" src="https://imgur.com/VCpS8cd.jpeg"/>
            <WordContainer>
                <a href="/" className="username">babyyoda</a>
                <p className="name">Baby Yoda</p>
            </WordContainer>
            <Button>Switch</Button>
        </Styles>
    );
}

export default User;