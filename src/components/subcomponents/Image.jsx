import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="Input image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="Input image"
          onChange={ onChange }
          name="imagePath"
          type="text"
          value={ imagePath }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
