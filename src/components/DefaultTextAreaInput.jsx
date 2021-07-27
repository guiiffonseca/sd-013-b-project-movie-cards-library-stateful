import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultTextAreaInput extends React.Component {
  render() {
    const { name, value, testName, labelText, handleChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${testName}-input-label` }>
        {labelText}
        <textarea
          value={ value }
          onChange={ handleChange }
          data-testid={ `${name}-input` }
          name={ name }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

DefaultTextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  testName: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
