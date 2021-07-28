import React from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends React.Component {
  render() {
    const { label, value, name, onChange } = this.props;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { label }
        <textarea
          value={ value }
          data-testid={ `${name}-input` }
          name={ name }
          id={ `${name}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextarea;
