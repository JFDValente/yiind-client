import LoggedTemplate from '../../templates/Logged';
import IdeasList from '../../organisms/IdeasList';

export default function IdeasPage() {
  return (
    <LoggedTemplate>
      <IdeasList />
    </LoggedTemplate>
  )
}
