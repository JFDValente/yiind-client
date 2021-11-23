import { getStaticPath } from '../../bosons/assets';

import Style from './Style';

const IdeaInteraction = () => {
  const voteClick = () => {
    
  }
  return (
    <Style.Container>
      <Style.VoteButton>
        <Style.VoteIcon src={getStaticPath('like-white')} alt="vote-icon"/>
        Apoiar
      </Style.VoteButton>
      <Style.MessageContainer>
        <Style.Input
          type="text"
          name="message"
          required
        />
        <Style.SendIcon src={getStaticPath('send')} alt="send-icon"/>
      </Style.MessageContainer>
    </Style.Container>
  )
};

export default IdeaInteraction;