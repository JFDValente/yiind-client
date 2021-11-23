import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme: { spacing } }) => spacing('mega')};
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export default {
  Form,
  Line,
};