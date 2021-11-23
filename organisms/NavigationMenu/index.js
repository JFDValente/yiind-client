import { useRouter } from 'next/router';

import { getUserState } from '../../bosons/customHook/users';

import Style from './Style';

const pages = [
  { label: 'Minha Conta', path: '/minha-conta'},
  { label: 'Minhas Idéias', path: '/minhas-ideias'},
  { label: 'Feed de Idéias', path: '/ideias'},
  { label: 'Lista de Interesses', path: '/interesses'}
]
const NavigationMenu = () => {
  const router = useRouter();
  const loggedUser = getUserState();

  const navigateTo = (path) => {
    router.push(path);
  }

  return (
    <Style.Container>
      <Style.User>
        {loggedUser.nome}
      </Style.User>
      {
        !!pages.length && pages.map((page) => (
          <Style.NavigationItem 
            key={page.label} 
            onClick={() => navigateTo(page.path)}
          >
            {page.label}
          </Style.NavigationItem>
        ))
      }
    </Style.Container>
  )
};

export default NavigationMenu;