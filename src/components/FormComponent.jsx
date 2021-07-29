import React from 'react';
import PropTypes from 'prop-types';

export default class FormComponent extends React.Component {
  render() {
    const { text, name, value, handleChange, test, type = 'text' } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${test}-input-label` }>
        {`${text}`}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ `${test}-input` }
        />
      </label>
    );
  }
}

FormComponent.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
  type: PropTypes.string,
};
