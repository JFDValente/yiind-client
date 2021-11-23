import { useEffect, useState } from 'react';

import PrimaryButton from '../../atoms/PrimaryButton';

import Select from '../../molecules/Select';

import Style from './Style';

function SelectForm(props) {
  const { onSubmit: onSubmitProp } = props;
  const [categories, setCategories] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (categories.length) onSubmitProp(categories);
  }

  return (
    <Style.Form onSubmit={onSubmit}>
      <Select onChange={setCategories} />
      <PrimaryButton label="Confirmar" />
    </Style.Form>
  )
}

export default SelectForm;
