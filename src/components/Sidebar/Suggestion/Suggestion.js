import React from 'react';
import User from "../User/User";
import {Button, SuggestionTitle, Styles, WordContainer} from "../../../styles/Styles";

function Suggestion() {
    return (
        <div>
        <Styles>
            <WordContainer>
                <SuggestionTitle>Suggestions For You</SuggestionTitle>
            </WordContainer>
            <Button black>See All</Button>
        </Styles>
            <User following="true" src="https://imgur.com/5xBC9OQ.jpeg" name="Mando" username="mando"
            text="Followed by asokha + 5 more"/>
        </div>
    );

}

export default Suggestion;