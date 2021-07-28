import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormImage extends Component {
  render() {
    const { imagePath, callback } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

FormImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
