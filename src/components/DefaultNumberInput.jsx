import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultNumberInput extends React.Component {
  render() {
    const { name, value, labelText, handleChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {labelText}
        <input
          value={ value }
          data-testid={ `${name}-input` }
          type="number"
          name={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DefaultNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};
