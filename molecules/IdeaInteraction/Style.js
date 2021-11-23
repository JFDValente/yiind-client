import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
  color: black;
  width: 100%;

  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    margin-top: 24px;
    flex-direction: row;
  }
`;

const VoteButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;

  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    margin-bottom: 0;
  }
`;

const VoteIcon = styled.img`
  margin-right: 8px;
  height: 18px;
  width: 18px;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Input = styled.input`
  font-size: 13px;
  line-height: 18px;
  width: 100%;
`;

const SendIcon = styled.img`
  cursor: pointer;
  margin-left: 8px;
  height: 20px;
  width: 20px;
`;

export default {
  Container,
  Input,
  MessageContainer,
  SendIcon,
  VoteButton,
  VoteIcon,
}
