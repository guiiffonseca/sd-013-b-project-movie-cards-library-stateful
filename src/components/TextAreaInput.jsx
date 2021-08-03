import React from 'react';
import PropTypes from 'prop-types';

export default class TextAreaInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <textarea
          cols="10"
          data-testid={ `${name}-input` }
          id={ `${name}` }
          name={ `${name}` }
          onChange={ onChange }
          rows="4"
          value={ value }
        />
      </label>
    );
  }
}

TextAreaInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
