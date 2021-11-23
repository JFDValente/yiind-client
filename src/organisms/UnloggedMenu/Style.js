import styled from 'styled-components';
// import Link from 'next/link'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  max-width: ${({ theme: { width } }) => (width.get('narrow'))};
`;

const AnchorCreate = styled.a`
  top: ${({ theme: { spacing } }) => spacing('giga')};
  z-index: 2;
  position: absolute;
  text-decoration: none;
  color: #FBDB5B;
  font-size: 32px;
  font-weight: 600;
  text-align: right;
  width: 100%;
`;

const AnchorInvesting = styled.a`
  top: ${({ theme: { spacing } }) => spacing('giga')};
  z-index: 2;
  position: absolute;
  text-decoration: none;
  color: #FBDB5B;
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

const MainText = styled.span`
  font-size: 24px;
  margin: 0 ${({ theme: { spacing } }) => spacing('mega')};
`;

const Footer = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${({ theme: { spacing } }) => spacing('base')};
  text-align: center;
  color: #BCA444;
`;

const TriangleContainer = styled.div`
  position: relative;
`;

const Triangle = styled.div`
  z-index: 1;
  position: relative;
  background-color: #24B3B3;
  text-align: left;
  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right:0;')}
  transform: ${({ direction }) => (direction === 'left' ? 'rotate(30deg)' : 'rotate(210deg)')} skewX(-30deg) scale(1,.866);
  width:  10em;
  height: 10em;
  border-top-right-radius: 30%;

  :before, :after {
	  content: '';
	  position: absolute;
	  background-color: inherit;
	  width:  10em;
	  height: 10em;
	  border-top-right-radius: 30%;
  }
	
  :before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
  }

  :after {
	  transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
  }
`;

export default {
  AnchorCreate,
  AnchorInvesting,
  Container,
  Footer,
  MainText,
  Triangle,
  TriangleContainer
};
