import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import to from '../../bosons/awaitTo';
import userRequest from '../../bosons/requests/user';

import FeedbackAlert from '../../atoms/FeedbackAlert';

import SelectForm from '../../molecules/SelectForm';

import Style from './Style';

function CategoriesSelect(props) {
  const { minLimit } = props;
  const router = useRouter();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const onSubmit = async (categories) => {
    if (categories.length < minLimit) {
      setFeedbackMessage(`Selecione pelo menos ${minLimit} categoria${(minLimit > 1 ? 's' : '')}`);
    }
    const payload = {
      categorias: categories,
    };
    const [userError, userResponse] = await to(userRequest.associateCategories(payload));

    if (userError) {
      console.log('Erro ao tentar associoar lista de categorias ao usuário');
      return;
    }

    router.push('/ideias');
  }

  return (
    <Style.Container>
      {
        !!feedbackMessage && (
          <FeedbackAlert type="failure" message={feedbackMessage} />
        )
      }
      <Style.Title>
        SELECIONE TRÊS CATEGORIAS DE SUA PREFERÊNCIA
      </Style.Title>
      <Style.FormContainer>
        <SelectForm onSubmit={onSubmit} />
      </Style.FormContainer>
    </Style.Container>
  )
}

export default CategoriesSelect;
