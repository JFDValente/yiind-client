import UpdatePasswordForm from '../../molecules/UpdatePasswordForm';

import Style from './Style';

function UpdatePassword() {
  return (
    <Style.Container>
      <Style.Title>
        ALTERAR SENHA
      </Style.Title>
      <Style.FormContainer>
        <UpdatePasswordForm />
      </Style.FormContainer>
    </Style.Container>
  )
}

export default UpdatePassword;
