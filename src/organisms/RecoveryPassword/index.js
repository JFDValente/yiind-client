import RecoveryPasswordForm from '../../molecules/RecoveryPasswordForm';

import Style from './Style';

function RecoveryPassword() {
  return (
    <Style.Container>
      <Style.Title>
        RECUPERAR SENHA
      </Style.Title>
      <Style.FormContainer>
        <RecoveryPasswordForm />
      </Style.FormContainer>
    </Style.Container>
  )
}

export default RecoveryPassword;
