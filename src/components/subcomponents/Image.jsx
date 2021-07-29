import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="Input image" data-testid="image-input-label">
        Imagem
        <input
          value={ imagePath }
          type="text"
          name="image"
          id="Input image"
          data-testid="image-input"
          onChange={ onChange }
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
