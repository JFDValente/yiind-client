import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import NavigationMenu from '../../organisms/NavigationMenu';
import TopBar from '../../organisms/TopBar';

import auth from '../../bosons/auth';
import { useUser } from '../../bosons/customHook/users';

import Style from './Style';

const LoggedTemplate = (props) => {
  const router = useRouter();
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  const { children } = props;

  useUser();

  useEffect(() => {
    if (!auth.getUserToken()) {
      router.push('/');
      return;
    }
  }, []);

  const toogleNavigationMenu = () => {
    setShowNavigationMenu(!showNavigationMenu);
  }

  return (
    <>
      <TopBar toogleNavigationMenu={toogleNavigationMenu}/>
      <Style.Content>
        {
          !!showNavigationMenu && <NavigationMenu />
        }
        { children }
      </Style.Content>
    </>
  )
};

export default LoggedTemplate;
