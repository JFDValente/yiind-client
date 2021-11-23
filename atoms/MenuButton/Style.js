import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ opened }) => opened ? '#FFFFFF' : '#FFFFFF'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ opened }) => opened ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ opened }) => opened ? '0' : '1'};
      transform: ${({ opened }) => opened ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ opened }) => opened ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default {
  Container,
}