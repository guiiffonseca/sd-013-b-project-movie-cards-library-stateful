import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  render() {
    const { input, value, onChange } = this.props;
    return (
      <label htmlFor={ `${input}-input` } data-testid={ `${input}-input-label` }>
        Imagem
        <input
          type="text"
          data-testid={ `${input}-input` }
          name={ `${input}Path` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  input: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
