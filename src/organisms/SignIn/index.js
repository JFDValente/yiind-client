import { useRouter } from 'next/router';

import SignInFormPJ from '../../molecules/SignInFormPJ';
import SignInFormPF from '../../molecules/SignInFormPF';

import Style from './Style';

export default function SignIn() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <Style.Container>
      <Style.Header>
        <Style.Triangle direction={'right'} />
        <Style.TitleHeader>
          <Style.Title>
            YIIND
          </Style.Title>
          <Style.SubTitle>
            YOUR IDEA INSIDE
          </Style.SubTitle>
        </Style.TitleHeader>
      </Style.Header>
      <Style.FormContainer>
      {
        type === 'pj' && (
          <SignInFormPJ />
        )
      }
      {
        type === 'pf' && (
          <SignInFormPF />
        )
      }
      </Style.FormContainer>
    </Style.Container>  
  )
}
