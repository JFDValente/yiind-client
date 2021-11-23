import { useState } from 'react';

import crypto from '../../bosons/crypto';
import formatter from '../../bosons/formatters';
import filters from '../../bosons/filters';
import to from '../../bosons/awaitTo';
import userRequest from '../../bosons/requests/user';
import validators from '../../bosons/validators';

import FeedbackAlert from '../../atoms/FeedbackAlert';
import Field from '../../atoms/Field';
import PrimaryButton from '../../atoms/PrimaryButton';

import Style from './Style';

const RecoveryPasswordForm = () => {
  const [cnpj, setCnpj] = useState('');
  const [tempPassword, setTempPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

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

  const getPayload = async () => ({
    cnpj: filters.onlyNumbers(cnpj),
    senhaTemp: await crypto.sha256(tempPassword),
    novaSenha: await crypto.sha256(newPassword),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateData()) return;

    const payload = await getPayload();
    const [userError, userResponse] = await to(userRequest.updatePassword(payload));
    
    if (userError) {
      setFeedbackType('failure');
      setFeedbackMessage(userError.mensagem);
      return;
    }

    setFeedbackType('success');
    setFeedbackMessage(userResponse.mensagem);    
  }

  return (
    <>
      {
        !!feedbackMessage && (
          <FeedbackAlert type={feedbackType} message={feedbackMessage} />
        )
      }
      <Style.Form onSubmit={onSubmit}>
        <Field
          type="text"
          name="cnpj"
          label="CNPJ"
          value={cnpj}
          onChange={formatCnpj}
          required
        />
        <Field
          type="password"
          name="tempPassword"
          label="Senha temporária"
          value={tempPassword}
          onChange={({ target })=>{setTempPassword(target.value)}}
          required
        />
        <Field
          type="password"
          name="newPassword"
          label="Nova Senha"
          value={newPassword}
          onChange={({ target })=>{setNewPassword(target.value)}}
          required
        />
        <PrimaryButton label="Enviar" />
      </Style.Form>
    </>
  )
};

export default RecoveryPasswordForm;