import React from 'react';

export default class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}
