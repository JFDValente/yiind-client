import { useGoogleLogout } from 'react-google-login';

import Style from './Style';

const clientId = '734796033833-rqk1o6r7ebo242c2go5hu81j2eu0rhdu.apps.googleusercontent.com';

function GoogleLogoutButton() {
  const onLogoutSuccess = (res) => {
    console.log('Logout made successfully');
  };

  const onFailure = (err) => {
    console.log('Handle failure cases', err);
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Style.Button onClick={signOut}>
      <img src="icons/google.svg" alt="google login"></img>
      <span>Sign out</span>
    </Style.Button>
  );
}

export default GoogleLogoutButton;