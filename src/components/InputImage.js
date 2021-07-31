import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    const { value, handleImageChange } = this.props;//
    return (
      <label
        htmlFor="imagem"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="imagem"
          name=""
          data-testid="image-input"
          type="text"
          value={ value }
          onChange={ handleImageChange }
        />
      </label>

    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  handleImageChange: PropTypes.func.isRequired,
};

export default InputImage;
