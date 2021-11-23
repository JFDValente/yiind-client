import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme: { spacing } }) => spacing('mega')};
`;


export default {
  Form,
};