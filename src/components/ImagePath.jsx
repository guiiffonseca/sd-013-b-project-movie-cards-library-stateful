import React from 'react';

class ImagePath extends React.Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default ImagePath;
