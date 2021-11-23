import { useGoogleLogin } from 'react-google-login';
import { getStaticPath } from '../../bosons/assets';
import googleToken from '../../bosons/googleToken';

import Style from './Style';

const clientId = '734796033833-rqk1o6r7ebo242c2go5hu81j2eu0rhdu.apps.googleusercontent.com';

function GoogleLoginButton(props) {
  const {
    onSuccess,
    onError,
  } = props;

  const onSuccessGoogle = (res) => {
    googleToken.refreshTokenSetup(res);
    // console.log(res.profileObj);
    onSuccess(res.profileObj);
  };

  const onFailure = (err) => {
    // console.log('[Login failed] res', err);
    onError(err);
  };

  const { signIn } = useGoogleLogin({
    onSuccess: onSuccessGoogle,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Style.Button onClick={signIn}>
      <Style.GoogleLogo src={getStaticPath('google_logo')} alt="google login" />
      <span>Login com Google</span>
    </Style.Button>
  );
}

export default GoogleLoginButton;