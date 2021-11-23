import IdeaExibition from '../../molecules/IdeaExibition';
import Style from './Style';

const mock = {}

mock.ideas = new Array(5).fill({
  id: 1,
  titulo: 'Exemplo de Título de Teste',
  categorias: [1,2,3,4,5],
  descricao: 'Texto exemplo para modelo de resumo e descrição: mandioca, cadeira, sala, parede, verde, jaqueta, bergamota, gemas, antroporfomórfico, grey\'s n anatomy, somewhere between the sacred, silence and sleep, xilofone, computador, otorrinolaringologista.',
  data: '21/11/2021'
});

const IdeasList = () => {
  const ideas = mock.ideas;
  return (
    <Style.Container>
      {
        !!ideas.length && ideas.map((idea) => (
          <IdeaExibition key={`idea-${idea.id}`} idea={idea}/>
        ))
      }
    </Style.Container>
  )
};

export default IdeasList;