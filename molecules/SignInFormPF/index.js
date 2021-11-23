import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import auth from '../../bosons/auth';
import to from '../../bosons/awaitTo';
import userRequest from '../../bosons/requests/user';

import FeedbackAlert from '../../atoms/FeedbackAlert';
import GoogleLogin from '../../atoms/Google/Login';

import Style from './Style';

function SignInFormPF() {
  const router = useRouter();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const onSuccessGoogle = async (googleData) => {
    setFeedbackMessage('');
  
    const payload = {
      email: googleData.email,
      fotoUrl: googleData.imageUrl,
      codigoEmail: googleData.googleId,
      nome: googleData.name,
    };

    const [userError, userResponse] = await to(userRequest.loginPF(payload));

    if (userError) {
      setFeedbackMessage(userError.mensagem);
      return;
    }

    auth.setUserToken(userResponse?.usuario[1]?.token);

    router.push('/ideias');
  };

  const onErrorGoogle = () => {
    setFeedbackMessage('Houve um erro ao tentar realizar login com o google')
  };

  useEffect(() => {
    if (auth.getUserToken()) {
      router.push('/ideias');
      return;
    }
  }, []);

  return (
    <>
      {
        !!feedbackMessage && (
          <FeedbackAlert type="failure" message={feedbackMessage} />
        )
      }
      <Style.Form>
        <GoogleLogin onSuccess={onSuccessGoogle} onError={onErrorGoogle} />
      </Style.Form>
    </>
  )
}

export default SignInFormPF;
