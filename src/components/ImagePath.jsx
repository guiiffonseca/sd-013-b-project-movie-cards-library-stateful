import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          valor={ valor }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImagePath;
