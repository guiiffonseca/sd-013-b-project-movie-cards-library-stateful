import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
