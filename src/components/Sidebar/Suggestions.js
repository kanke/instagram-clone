import React from 'react';
import './Sidebar.css';
import User from "./User";
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
            <User following/>
        </div>
    );

}

export default Suggestions;