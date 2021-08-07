import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePathInput extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label
        htmlFor="imagePath"
        data-testid="image-input-label"
      >
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePathInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePathInput;
