import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const responsivity = css`
  margin-left: ${({ theme: { spacing } }) => spacing('small')};

  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    margin-left: ${({ theme: { spacing } }) => spacing('base')};
  }

  ${({ theme: { breakpoints } }) => breakpoints.up('lg')} {
    margin-left: ${({ theme: { spacing } }) => spacing('large')};
  }
`;

const PublishIdeaButton = styled.button`
  ${responsivity}
  border: solid #FF8888 1px;
  border-radius: 10px;
  background-color: #CC0000;
  color: #FFFFFF;
  height: 35px;
  width: 110px;
  cursor: pointer;

  :hover {
    background-color: #EA1717;
    border: solid #FFFFFF 1px;
  }
`;

const NotificationContainer = styled.div`
  ${responsivity}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background-color: #D1D1D1;
  cursor: pointer;
`;

const NotificationImg = styled.img`
  background-color: #D1D1D1;
  height: 17px;
  width: 15px;
`;

const ProfileContainer = styled.div`
  cursor: pointer;
`;

const ProfileImage = styled.img`
 ${responsivity}
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: solid #FFFFFF 1px;
  background-color: #99BFDB;
`;

const SubMenuContainer = styled.div`
  position: absolute;
  right: 16px;
  top: calc(50px + 24px);
  width: 150px;
  /* height: 50px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #DDDDDD;
  box-shadow: 3px 3px 4px #999999;
  border-radius: 8px;
  padding: 8px;
  color: #000;
`;

const SubMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  text-align: center;
  :hover {
    background-color: #ADADAD;
  }
`;

const LogoutIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 4px;
`;

export default {
  Container,
  LogoutIcon,
  NotificationContainer,
  NotificationImg,
  ProfileContainer,
  ProfileImage,
  PublishIdeaButton,
  SubMenuContainer,
  SubMenuItem,
}
