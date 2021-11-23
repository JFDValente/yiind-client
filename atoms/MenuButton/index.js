import { useState } from 'react';
import { func } from 'prop-types';

import Style from './Style';

const MenuButton = (props) => {
  const { onClick } = props;
  const [opened, setOpened] = useState(false);

  const toogleMenu = () => {
    onClick(!opened);
    setOpened(!opened);
  }

  return (
    <Style.Container onClick={toogleMenu} opened={opened}>
      <div />
      <div />
      <div />
    </Style.Container>
  )
};

MenuButton.propTypes = {
  onClick: func.isRequired,
};

export default MenuButton;
