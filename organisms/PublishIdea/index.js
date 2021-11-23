import IdeaForm from '../../molecules/IdeaForm';

import Style from './Style';

function PublishIdea() {
  return (
    <Style.Container>
      <Style.Title>
        PUBLICAR
      </Style.Title>
      <Style.FormContainer>
        <IdeaForm />
      </Style.FormContainer>
    </Style.Container>
  )
}

export default PublishIdea;
