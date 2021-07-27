import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
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
