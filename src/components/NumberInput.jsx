import React from 'react';
import PropTypes from 'prop-types';

export default class NumberInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <input
          data-testid={ `${name}-input` }
          id={ `${name}` }
          min="0"
          max="5"
          name={ `${name}` }
          onChange={ onChange }
          step="0.5"
          type="number"
          value={ value }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
