import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInputs extends Component {
  render() {
    const { text, id, name, value, onChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
        <input
          name={ name }
          type="text"
          data-testid={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormInputs.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInputs;
