import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          value={ state }
          onChange={ evento }
          name="imagePath"
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default ImagePath;
