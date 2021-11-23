import {
  string
} from 'prop-types';

import Style from './Style';

function FeedbackAlert(props) {
  const { type, message } = props;
  return (
    <Style.Container type={type}>
      {message}
    </Style.Container>
  )
}

FeedbackAlert.propTypes = {
  type: string.isRequired,
  message: string.isRequired,
};

export default FeedbackAlert;