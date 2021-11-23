import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  height: 100vh;
  width: 80%;

  ${({ theme: { spacing } }) =>`
    padding: ${spacing('large')} ${spacing('small')}
  `};
  /* margin: 150px auto; */

  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    position: initial;
    width: 25%;
  }

  ${({ theme: { breakpoints } }) => breakpoints.up('lg')} {
    position: initial;
    width: 20%;
  }

  transform: translateX(0%);
  @keyframes notification{
    from {
      transform: translateX(-100%);
      opacity: 0%;
    }
    to {
      transform: translateX(0%);
      opacity: 100%
    }
  }

  animation-name: notification;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
`;

const User = styled.p`
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

`;

const NavigationItem = styled.p`
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin-bottom: 16px;


  :hover {
    font-weight: bold;
  }
`;

export default { 
  Container,
  NavigationItem,
  User,
}