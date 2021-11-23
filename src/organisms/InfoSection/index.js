import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getStaticPath } from '../../bosons/assets';
import auth from '../../bosons/auth';
import { getUserState } from '../../bosons/customHook/users';

import Style from './Style';

const SubMenuProfile = () => {
  const router = useRouter();

  const doLogout = () => {
    auth.clearUserToken();
    router.push('/');
  }

  return (
    <Style.SubMenuContainer>
      <Style.SubMenuItem onClick={doLogout}>
        <Style.LogoutIcon src={getStaticPath('logout_icon')} alt="logout"/>
        <span>Logout</span>
      </Style.SubMenuItem>
    </Style.SubMenuContainer>
  )
};

const InfoSection = () => {
  const router = useRouter();

  const [profileImg, setProfileImg] = useState('');
  const [showSubMenuProfile, setShowSubMenuProfile] = useState(false);
  const [showSubMenuNotification, setShowSubMenuNotification] = useState(false);
  const loggedUser = getUserState();

  const toggleSubMenuProfile = () => setShowSubMenuProfile(!showSubMenuProfile);
  const toggleSubMenuNotification = () => setShowSubMenuNotification(!showSubMenuNotification);

  const loadProfileImage = () => {
    const srcProfileImg = loggedUser?.fotoUrl
      ? loggedUser?.fotoUrl
      : getStaticPath('user_icon');

    setProfileImg(srcProfileImg);
  }

  useEffect(() => {
    loadProfileImage();
  }, [loggedUser]);

  return (
    <Style.Container>
      <Style.PublishIdeaButton onClick={()=> router.push('/publicar')}>
        Nova Idéia
      </Style.PublishIdeaButton>  
      <Style.NotificationContainer onClick={toggleSubMenuNotification}>
        <Style.NotificationImg src={getStaticPath('notification')} alt="bell"/>
      </Style.NotificationContainer>
      <Style.ProfileContainer>
        <Style.ProfileImage src={profileImg} alt="user" onClick={toggleSubMenuProfile} />
        {
          !!showSubMenuProfile && (<SubMenuProfile />)
        }
      </Style.ProfileContainer>
    </Style.Container>
  )
};

export default React.memo(InfoSection);
