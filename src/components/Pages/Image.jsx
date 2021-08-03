import React from 'react';

class Image extends React.Component {

  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="img"
        data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={imagePath}
        />
      </label>
    )
  }
}

export default Image;