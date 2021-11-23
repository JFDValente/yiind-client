import React, { useEffect, useState } from 'react';

import ideasRequest from '../../bosons/requests/idea';
import to from '../../bosons/awaitTo';

import Style from './Style';

function Select(props) {
  const { onChange } = props;
  const [formattedItems, setFormattedItems] = useState([]);

  const clickItem = (id) => {
    //find item
    const tempItems = formattedItems;
    const indexItem = tempItems.findIndex(item => item.id === id);

    //modify status of the selected item
    tempItems[indexItem].selected = !tempItems[indexItem].selected;
    setFormattedItems([...tempItems]);

    //send selected array to the parent component
    const selectedItems = formattedItems.filter((item) => item.selected).map((item) => item.id);
    if (selectedItems.length) onChange(selectedItems);
  }

  useEffect(async () => {
    const [categoriesError, categoriesResponse] = await to(ideasRequest.listCategories());

    if (categoriesError) {
      console.log('Erro ao carregar lista de categorias');
      return;
    }
    
    const categories = categoriesResponse?.categorias.map((item) => ({ selected: false, ...item }));
    setFormattedItems(categories);
  }, []);

  return (
    <Style.CategoriesContainer>
    {
      !!formattedItems.length && formattedItems.map((item) => (
        <Style.Item key={item.id} onClick={() => clickItem(item.id)} selected={item.selected}>
          {item.titulo}
        </Style.Item>
      ))
    }
    </Style.CategoriesContainer>
  )
}

export default React.memo(Select);
