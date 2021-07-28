import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  render() {
    const { label, id, type = 'text', value, onChange } = this.props;
    // console.log(this.props);
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <input
          id={ id }
          type={ type }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>

    );
  }
}

export default LabelInput;

LabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
