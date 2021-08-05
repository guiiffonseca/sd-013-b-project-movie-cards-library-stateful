import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePathInput extends Component {
  render() {
    const { imagePathValue, handleChange } = this.props;
    return (
      <label htmlFor="true" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ imagePathValue }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePathInput.propTypes = {
  imagePathValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
