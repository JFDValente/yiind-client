import InfoSection from '../../organisms/InfoSection';

import MenuButton from '../../atoms/MenuButton';

import Style from './Style';

const TopBar = (props) => {
  const { toogleNavigationMenu } = props;
  return (
    <Style.Container>
      <MenuButton onClick={toogleNavigationMenu}/>
      <InfoSection />
    </Style.Container>
  );
}

export default TopBar;
