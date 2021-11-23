import {
  arrayOf, number, string, shape
} from 'prop-types';

import Style from './Style';

const IdeaBasic = (props) => {
  const {
    categorias,
    data,
    descricao,
    titulo
  } = props;

  return (
    <Style.Container>
      <Style.Line>
        <Style.Title>
          {titulo}
        </Style.Title>
        <Style.Date>
          {data}
        </Style.Date>
      </Style.Line>
      <Style.Line>
      <Style.CategoriesContainer>
      {
        !!categorias.length && categorias.map((category) => (
          <Style.Category key={category}>
            {category}
          </Style.Category>
        ))
      }
      </Style.CategoriesContainer>
      </Style.Line>
      <Style.Description>
        {descricao}
      </Style.Description>
    </Style.Container>
  )
};

IdeaBasic.propTypes = {
  categorias: arrayOf(number),
  data: string.isRequired,
  descricao: string.isRequired,
  titulo: string.isRequired, 
};

IdeaBasic.defaultProps = {
  categorias: [],
};

export default IdeaBasic;