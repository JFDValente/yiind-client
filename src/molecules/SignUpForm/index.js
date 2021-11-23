import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import auth from '../../bosons/auth';
import formatter from '../../bosons/formatters';
import filters from '../../bosons/filters';
import to from '../../bosons/awaitTo';
import userRequest from '../../bosons/requests/user';
import validators from '../../bosons/validators';

import FeedbackAlert from '../../atoms/FeedbackAlert';
import Field from '../../atoms/Field';
import PrimaryButton from '../../atoms/PrimaryButton';

import Style from './Style';

function SignUpForm(props) {
  const router = useRouter();
  const { onSuccess } = props;

  const [enterpriseName, setEnterpriseName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('success');

  const formatCnpj = (e) => setCnpj(formatter.cnpj(e.target.value));

  const validateData = () => {
    setFeedbackMessage('');
    if (!validators.cnpj(cnpj)) {
      setFeedbackType('failure');
      setFeedbackMessage('O CNPJ fornecido está incorreto');
      return false;
    }
    return true;
  }

  const getPayload = () => ({
    nome: enterpriseName,
    cnpj: filters.onlyNumbers(cnpj),
    email,
    telefone: phone,
    senha: password,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateData()) return;

    const payload = getPayload();
    const [userError, userResponse] = await to(userRequest.createPJ(payload));

    if (userError) {
      setFeedbackType('failure');
      setFeedbackMessage(userError.mensagem);
      return;
    }

    auth.setUserToken(userResponse?.usuario[1]?.token);

    setFeedbackType('success');
    setFeedbackMessage(userResponse.mensagem);

    setTimeout(() => {
      onSuccess();
    }, 1500);
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
          <FeedbackAlert type={feedbackType} message={feedbackMessage} />
        )
      }
      <Style.Form onSubmit={(onSubmit)}>
        <Field
          type="text"
          name="enterpriseName"
          label="Empresa"
          value={enterpriseName}
          onChange={({ target })=>{setEnterpriseName(target.value)}}
          required
        />
        <Style.Line>
          <Field
            type="text"
            name="cnpj"
            label="CNPJ"
            value={cnpj}
            onChange={formatCnpj}
            required
          />
          <Field
            type="text"
            name="phone"
            label="Telefone"
            value={phone}
            onChange={({ target })=>{setTelefone(target.value)}}
          />
        </Style.Line>
        <Field
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={({ target })=>{setEmail(target.value)}}
          required
        />
        <Field
          type="password"
          name="password"
          label="Senha"
          value={password}
          onChange={({ target })=>{setPassword(target.value)}}
          required
        />
        <Field
          type="password"
          name="confirmedPassword"
          label="Confirmar senha"
          value={confirmedPassword}
          onChange={({ target })=>{setConfirmedPassword(target.value)}}
          required
        />
        <PrimaryButton label="Confirmar" />
      </Style.Form>
    </>
  )
}

export default SignUpForm;
