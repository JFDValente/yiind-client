import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 48%;
  box-sizing: content-box; 
`;

const Label = styled.span`
  font-size: 16px;
  margin-bottom: ${({ theme: { spacing } }) => spacing('micro')};
  ${({ format }) => (format === 'bold' ? 'font-weight: bold' : '')};
  ${({ color }) => (color === 'black' ? 'color: #000000' : 'color: #FFFFFF')};
`;

const field = css`
  border: none;
  font-size: 16px;  
  color: #000000;
  border-radius: 5px;
  box-shadow: 2px 3px 5px #000000;
  padding: ${({ theme: { spacing } }) => spacing('micro')} ${({ theme: { spacing } }) => spacing('micro')};
  height: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing('base')};
  background-color: #FFFFFF;
`;

const Input = styled.input`
  ${field}
  width: calc(100% - 16px);
`;

const Select = styled.select`
  ${field}
  cursor: pointer;
  width: 100%;
`;

const TextArea = styled.textarea`
  ${field}
  width: calc(100% - 16px);
`;

export default {
  Container,
  Input,
  Label,
  Select,
  TextArea,
}