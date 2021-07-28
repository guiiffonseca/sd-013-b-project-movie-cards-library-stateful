import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="image-input-movie" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="image-input-movie"
          type="text"
          value={ imagePath }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
