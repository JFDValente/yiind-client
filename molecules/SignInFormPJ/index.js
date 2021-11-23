import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import auth from '../../bosons/auth';
import crypto from '../../bosons/crypto';
import formatter from '../../bosons/formatters';
import filter from '../../bosons/filters';
import to from '../../bosons/awaitTo';
import userRequest from '../../bosons/requests/user';

import FeedbackAlert from '../../atoms/FeedbackAlert';
import Field from '../../atoms/Field';
import PrimaryButton from '../../atoms/PrimaryButton';

import Style from './Style';

function SignInFormPJ() {
  const router = useRouter();
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const formatCnpj = (e) => setCnpj(formatter.cnpj(e.target.value));

  const onSubmit = async (event) => {
    event.preventDefault();
    setFeedbackMessage('');

    const payload = {
      cnpj: filter.onlyNumbers(cnpj),
      password: await crypto.sha256(password),
    }

    const [userError, userResponse] = await to(userRequest.loginPJ(payload));
    
    if (userError) {
      setFeedbackMessage(userError.mensagem);
      return;
    }
    
    auth.setUserToken(userResponse?.usuario[1]?.token);
    
    router.push('/ideias');
  }

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
      <Style.Form onSubmit={(onSubmit)}>
        <Field
          type="text"
          name="cnpj"
          label="CNPJ"
          formatLabel="slim"
          labelColor="white"
          value={cnpj}
          onChange={formatCnpj}
          required
        />
        <Field
          type="password"
          name="password"
          label="Senha"
          formatLabel="slim"
          labelColor="white"
          value={password}
          onChange={({ target })=>{setPassword(target.value)}}
          required
        />
        <Style.ForgotLink onClick={()=> router.push('/recuperar')}>
          Esqueci a Senha
        </Style.ForgotLink>
        <PrimaryButton label="Entrar" />
      </Style.Form>
      <Style.SignUpLink onClick={()=> router.push('/cadastro')}>
        Não tem conta? Cadastre-se agora
      </Style.SignUpLink>
    </>
  )
}

export default SignInFormPJ;
