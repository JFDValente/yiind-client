import { useState } from 'react';

import to from '../../bosons/awaitTo';
import userRequest from '../../bosons/requests/user';

import FeedbackAlert from '../../atoms/FeedbackAlert';
import Field from '../../atoms/Field';
import PrimaryButton from '../../atoms/PrimaryButton';

import Style from './Style';

const RecoveryPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const getPayload = () => ({
    email,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = getPayload();
    const [userError, userResponse] = await to(userRequest.sendEmailRecovery(payload));
    
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
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={({ target })=>{setEmail(target.value)}}
          required
        />
        <PrimaryButton label="Enviar" />
      </Style.Form>
    </>
  )
};

export default RecoveryPasswordForm;