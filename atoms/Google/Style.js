import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #AAAAAA;
  border-radius: 5px;
  cursor: pointer;
  background-color: #FFFFFF;
  padding: ${({ theme: { spacing } }) => spacing('micro')} 0;
  margin-bottom: ${({ theme: { spacing } }) => spacing('base')};

`;

const GoogleLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: ${({ theme: { spacing } }) => spacing('small')};
`;

export default {
  Button,
  GoogleLogo,
}