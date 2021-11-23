import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #22AA3B;
  height: 35px;
  width: fit-content;
  align-self: center;
  cursor: pointer;
  box-shadow: 0 5px 5px #000000;

  > span {
    color: #FFFFFF;
    font-weight: bold;
    margin: auto 25px;
  }

  :hover {
    background-color: #1B9650 ;
    border: 1px solid #FFFFFF;
  }
`;

export default { Button };