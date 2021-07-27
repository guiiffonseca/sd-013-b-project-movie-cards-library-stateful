import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultTextInput extends React.Component {
  render() {
    const { name, value, handleChange, labelText, testName} = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${testName}-input-label` }>
        {labelText}
        <input
          data-testid={ `${testName}-input` }
          value={ value }
          type="text"
          name={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DefaultTextInput.propTypes = {
  testName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};
