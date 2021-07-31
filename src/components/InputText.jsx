import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { dataTestidLabel,
      type,
      dataTestidInput,
      value,
      onChange,
      name,
      labelText } = this.props;
    return (
      <label htmlFor={ name } data-testid={ dataTestidLabel }>
        { labelText }
        <input
          type={ type }
          data-testid={ dataTestidInput }
          value={ value }
          onChange={ onChange }
          name={ name }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  dataTestidLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
}

export default InputText;
