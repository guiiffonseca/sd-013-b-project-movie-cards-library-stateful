import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="imagePath">
        URL da imagem:
        <input
          id="imagePath"
          value={ state }
          onChange={ evento }
          name="imagePath"
          type="text"
        />
      </label>
    );
  }
}

export default ImagePath;
