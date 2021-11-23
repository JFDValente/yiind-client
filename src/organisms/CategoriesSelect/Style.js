import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D5D5D5;
  border-radius: 10px;
  border: 2px solid #A5A5A5;
  ${({ theme: { spacing } }) =>`
    padding: ${spacing('large')} ${spacing('small')}
  `};
  margin: 150px auto;
  width: 80%;

  ${({ theme: { breakpoints } }) => breakpoints.up('lg')} {
    width: 40%;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  border-bottom: 1px solid #919191;
  width: 100%;
  padding-bottom: ${({ theme: { spacing } }) => spacing('small')};
  margin-bottom: ${({ theme: { spacing } }) => spacing('small')};
`;

const FormContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  align-self: center;

  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    width: 95%;
  }
`;

export default { 
  Container,
  FormContainer,
  Title,
}