import styled, {css} from 'styled-components'
import {makeStyles} from "@material-ui/core";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  grid-column: span 1 / span 1;
  width: 280px;
`;

const WordContainer = styled.div`
  word-wrap: break-word;
  padding-right: 40px;
`;

const Button = styled.button`
  font-size: 14px;
  line-height: 14px;
  color: #0095f6;
  border: none;
  background: none;
  font-weight: bold;

  ${props => props.black && css`
    color: #000000;
    border: none;
    background: none;
    font-weight: bold;
    line-height: 4px;
  `}
`;

const FooterContainer = styled.footer`
  color: #c7c7c7;
`;

const Span = styled.span`
  display: block;
  width: 259px;
  word-wrap: break-word;
  text-align: left;
  padding-top: 20px;
`;

const SuggestionTitle = styled.p`
  color: #8e8e8e;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
`;

const avatarSize = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    timeline: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        border: "solid 1px red",
    }
}));

export {UserContainer, WordContainer, Button, FooterContainer, Span, SuggestionTitle, avatarSize};