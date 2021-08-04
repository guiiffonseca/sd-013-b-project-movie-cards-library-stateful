import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { id, label, value, onChange } = this.props;
    const name = (id === 'image-input') ? 'imagePath' : id.replace('-input', '');
    const type = (id === 'rating-input') ? 'number' : 'text';

    return (
      <label htmlFor={ name } data-testid={ `${id}-label` }>
        {label}
        <input
          data-testid={ id }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Inputs;
