import {
  arrayOf, bool, func, number, shape, string,
} from 'prop-types';

import Style from './Style';

function Field(props) {
  const {
    formatLabel,
    label,
    labelColor,
    name,
    onChange,
    options,
    required,
    rows,
    type,
    value,
  } = props;

  return (
    <Style.Container>
      <Style.Label format={formatLabel} color={labelColor}>{label}</Style.Label>
      {
        (['select','textArea'].indexOf(type) === -1) && (
          <Style.Input name={name} type={type} value={value} onChange={onChange} required={required}/>
        )
      }
      {
        type === 'select' && !!options.length &&(
          <Style.Select name={name}>
            {
              options.map((item) => (
                <option key={`id-${item.value}`}value={item.value}>{item.label}</option>
              ))
            }
          </Style.Select>
        )
      }
      {
        type == 'textArea' && (
          <Style.TextArea name={name} value={value} onChange={onChange} rows={rows} required={required}/>
        )
      }
    </Style.Container>
  )
}

Field.propTypes = {
  formatLabel: string,
  label: string.isRequired,
  labelColor: string,
  name: string.isRequired,
  onChange: func,
  required: bool,
  rows: number,
  type: string.isRequired,
  value: string,
  options: arrayOf(shape({
    value: string.isRequired,
    label: string.isRequired,
  })),
};

Field.defaultProps = {
  formatLabel: 'bold',
  labelColor: 'black',
  onChange: null,
  required: false,
  rows: 1,
  value: '',
  options: [],
};

export default Field;
