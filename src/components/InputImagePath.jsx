import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImagePath extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          id="image"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
