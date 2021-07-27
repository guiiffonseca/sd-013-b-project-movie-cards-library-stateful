import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputImage extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          value={ value }
          name="imagePath"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};