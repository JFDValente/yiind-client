import styled, { css } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  max-width: ${({ theme: { width } }) => (width.get('slim'))};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: ${({ theme: { spacing } }) => spacing('base')};
  margin-bottom: ${({ theme: { spacing } }) => spacing('giga')};
`;

const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${({ theme: { spacing } }) => spacing('mega')};
`;

const Title = styled.span`
  font-size: 56px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 20px;
  color: #BCA444;
`;

const Triangle = styled.div`
  z-index: 1;
  position: relative;
  background-color: #24B3B3;
  text-align: left;
  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right:0;')}
  transform: ${({ direction }) => (direction === 'left' ? 'rotate(30deg)' : 'rotate(210deg)')} skewX(-30deg) scale(1,.866);
  width:  5em;
  height: 5em;
  border-top-right-radius: 30%;

  :before, :after {
	  content: '';
	  position: absolute;
	  background-color: inherit;
	  width:  5em;
	  height: 5em;
	  border-top-right-radius: 30%;
  }

  :before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
  }

  :after {
	  transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
  }
`;

const FormContainer = styled.div`
  width: 85%;
`;


export default {
  Container,
  FormContainer,
  Header,
  SubTitle,
  Title,
  TitleHeader,
  Triangle,
};
