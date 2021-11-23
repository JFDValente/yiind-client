import {
  string,
} from 'prop-types';

import Style from './Style';

function PrimaryButton(props) {
  const { label } = props;
  return (
    <Style.Button>
      <span>
        {label}
      </span>
    </Style.Button>
  )
}

PrimaryButton.propTypes = {
  label: string.isRequired,
};

export default PrimaryButton;
