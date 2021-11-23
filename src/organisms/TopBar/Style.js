import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: #000000;
  padding: ${({ theme: { spacing } }) =>` ${spacing('micro')} ${spacing('small')}`};
  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    padding: ${({ theme: { spacing } }) =>` ${spacing('small')} ${spacing('small')}`};
  }
`;

export default {
  Container,
}