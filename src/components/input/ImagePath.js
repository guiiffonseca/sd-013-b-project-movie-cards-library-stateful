import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { valor, funcao } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ valor }
          onChange={ funcao }
          name="imagePath"
          id="imagePath"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  valor: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default ImagePath;