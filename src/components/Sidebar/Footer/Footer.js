import React from 'react';
import {FooterContainer, Span} from "../../../styles/Styles";

function Footer() {
    return (
        <div>
            <FooterContainer className="small text">
                <Span> About. Help . Press . API . Jobs . Privacy . Terms . Locations . Top . Accounts . Hashtags . Language </Span>
                <p>© 2021 BOOLGRAM FROM BOOLEAN</p>
            </FooterContainer>
        </div>
    );
}

export default Footer;