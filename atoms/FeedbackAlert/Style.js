import styled from 'styled-components';

const Container = styled.p`
  position: absolute;
  top: ${({ theme: { spacing } }) => spacing('small')};
  left: 0;
  right: 0;
  background-color: ${({ type }) => type === 'success' ? '#00840d' : '#AA0000'};
  color: #FFFFFF;
  /* font-weight: bold; */
  font-size: 18px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  align-self: center;
  text-align: center;
  ${({ theme: { spacing } }) => `
    padding: ${spacing('base')} ${spacing('base')};
    margin: 0 ${spacing('giga')};
  `}

  transform: translateY(0%);
  @keyframes notification{
    from {
      transform: translateY(-100%);
      opacity: 0%;
    }
    to {
      transform: translateY(0%);
      opacity: 100%
    }
  }

  animation-name: notification;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
`;

export default { Container };