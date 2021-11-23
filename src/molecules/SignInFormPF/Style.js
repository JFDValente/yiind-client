import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme: { spacing } }) => spacing('mega')};
  width: 100%;
`;

const link = css`
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const ForgotLink = styled.a`
  ${link}
  font-size: 14px;
  color: #BCA444;
  margin-bottom: ${({ theme: { spacing } }) => spacing('small')};
`;

const SignUpLink = styled.a`
  ${link}
  font-size: 16px;
  color: #23B5B5;
`;

export default {
  ForgotLink,
  Form,
  SignUpLink,
};