import React from 'react';

class ImagePath extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

export default ImagePath;
