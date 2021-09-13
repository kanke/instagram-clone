import styled, {css} from 'styled-components'

const Styles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  grid-column: span 1 / span 1;
`;

const WordContainer = styled.div`
  word-wrap: break-word;
`;

const Button = styled.button`
  font-size: 14px;
  line-height: 14px;
  color: #0095f6;
  border: none;
  background: none;
  font-weight: bold;

  ${props => props.black && css`
    color: black;
    border: none;
    background: none;
    font-weight: bold;
    line-height: 4px;
  `}
`;

export {Styles, WordContainer, Button};