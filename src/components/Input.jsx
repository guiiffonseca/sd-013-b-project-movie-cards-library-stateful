import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      labelTest,
      name,
      label,
      onChange,
      value,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ labelTest }
      >
        {label}
        <input
          data-testid={ id }
          type="text"
          id={ id }
          value={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string
    .isRequired,
  labelTest: PropTypes.string
    .isRequired,
  value: PropTypes.number
    .isRequired,
  label: PropTypes.string
    .isRequired,
  name: PropTypes.string
    .isRequired,
  onChange: PropTypes.func
    .isRequired,
};

export default Input;
