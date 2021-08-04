import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends Component {
  render() {
    const { id, label, value, onChange } = this.props;
    const name = id.replace('-input', '');

    return (
      <label htmlFor={ name } data-testid={ `${id}-label` }>
        {label}
        <textarea
          data-testid={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
