import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import auth from '../../bosons/auth';
import to from '../../bosons/awaitTo';
import ideaRequest from '../../bosons/requests/idea';

import FeedbackAlert from '../../atoms/FeedbackAlert';
import Field from '../../atoms/Field';
import PrimaryButton from '../../atoms/PrimaryButton';

import Select from '../../molecules/Select';

import Style from './Style';

function IdeaForm() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [requiredResource, setRequiredResource] = useState('');
  const [title, setTitle] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const cleanForm = () => {
    setCategories([]);
    setDescription('');
    setRequiredResource('');
    setTitle('');
  }
  const getPayload = () => ({
    titulo: title,
    descricao: description,
    recursosNecessarios: requiredResource,
    categorias: categories,
  });

  const validateData = () => {
    const minLimit = 1;
    if (categories.length < minLimit) {
      setFeedbackType('failure');
      setFeedbackMessage(`Selecione pelo menos ${minLimit} categoria${(minLimit > 1 ? 's' : '')}`);
      return false;
    }
    return true;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setFeedbackMessage('');

    if (!validateData()) return;

    const payload = getPayload();
    const [ideaError, ideaResponse] = await to(ideaRequest.create(payload));

    if (ideaError) {
      setFeedbackType('failure');
      setFeedbackMessage(ideaError.mensagem);
      return;
    }

    setFeedbackType('success');
    setFeedbackMessage(ideaResponse.mensagem);
    cleanForm();
  }

  useEffect(() => {
    if (!auth.getUserToken()) {
      router.push('/login/pf');
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
          name="title"
          label="Título"
          value={title}
          onChange={({ target })=> setTitle(target.value)}
          required
        />
        <Field
          type="textArea"
          name="description"
          label="Descrição"
          value={description}
          rows={4}
          onChange={({ target })=> setDescription(target.value)}
          required
        />
        <Field
          type="textArea"
          name="requiredResource"
          label="Recursos necessários"
          rows={3}
          value={requiredResource}
          onChange={({ target })=> setRequiredResource(target.value)}
          required
        />
        <Select onChange={setCategories} />
        <PrimaryButton label="Enviar" />
      </Style.Form>
    </>
  )
}

export default IdeaForm;
