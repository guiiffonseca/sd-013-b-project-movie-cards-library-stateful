import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <input
          data-testid={ `${name}-input` }
          id={ `${name}` }
          name={ (name === 'image') ? 'imagePath' : `${name}` }
          onChange={ onChange }
          type="text"
          value={ value }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
