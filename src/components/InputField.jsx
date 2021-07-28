import React from 'react';
import PropTypes from 'prop-types';

class InpuField extends React.Component {
  render() {
    const { label, type, value, name, onChange } = this.props;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { label }
        <input
          type={ type }
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

InpuField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InpuField;
