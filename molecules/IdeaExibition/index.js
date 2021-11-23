import IdeaBasic from '../IdeaBasic';
import IdeaInteraction from '../IdeaInteraction'; 
import Style from './Style';

const IdeaExibition = (props) => {
  const { idea } = props;
  return (
    <Style.Container>
      <IdeaBasic {...idea} />
      <IdeaInteraction />
    </Style.Container>
  )
};

export default IdeaExibition;