import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const {
      id,
      labelTest,
      label,
      value,
      onChange,
      name,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ labelTest }
      >
        {label}
        <input
          data-testid={ id }
          type="number"
          id={ id }
          value={ value }
          onChange={ onChange }
          name={ name }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  id: PropTypes.string
    .isRequired,
  labelTest: PropTypes.string
    .isRequired,
  label: PropTypes.string
    .isRequired,
  value: PropTypes.number
    .isRequired,
  onChange: PropTypes.func
    .isRequired,
  name: PropTypes.string
    .isRequired,
};

export default InputNumber;
