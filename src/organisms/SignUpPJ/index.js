import SignUpForm from '../../molecules/SignUpForm';

import Style from './Style';

function SignUpPJ(props) {
  return (
    <Style.Container>
      <Style.Title>
        CADASTRO
      </Style.Title>
      <Style.FormContainer>
        <SignUpForm {...props} />
      </Style.FormContainer>
    </Style.Container>
  )
}

export default SignUpPJ;
