import React from 'react';

export default class ImgPath extends React.Component {
  render() {
    return (
      <label htmlFor="imgPath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}
