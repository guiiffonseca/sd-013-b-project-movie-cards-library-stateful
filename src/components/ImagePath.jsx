import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
