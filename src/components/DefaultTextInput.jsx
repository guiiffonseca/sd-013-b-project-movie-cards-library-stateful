import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultTextInput extends React.Component {
  render() {
    const { name, value, handleChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        Subtítulo
        <input
          data-testid={ `${name}-input` }
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
