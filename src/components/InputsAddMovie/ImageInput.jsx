import React from 'react';

class ImageInput extends React.Component {
  render() {
    const { value, handleChange } = this;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          type="text"
          name="image-input"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImageInput;
