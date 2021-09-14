import React from 'react';
import './Sidebar.css';
import User from "./User/User";
import {Button, Styles, WordContainer} from "./Styles";

function Suggestions() {
    return (
        <div>
        <Styles>
            <WordContainer>
                <p className="title">Suggestions For You</p>
            </WordContainer>
            <Button black>See All</Button>
        </Styles>
            <User following="true" src="https://imgur.com/5xBC9OQ.jpeg" name="Mando" username="mando"
            text="Followed by asokha + 5 more"/>
        </div>
    );

}

export default Suggestions;