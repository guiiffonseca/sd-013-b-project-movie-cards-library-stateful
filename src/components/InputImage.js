import React, { Component } from 'react';

class InputImage extends Component {
  render() {
    const { imagePath, handleImageChange } = this.props;//
    return (
      <label
        htmlFor="imagem"
        data-testid="image-input-label">
        Imagem
        <input
          id="imagem"
          name=""
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ handleImageChange }
        />
      </label>

    );
  }
}

export default InputImage;
