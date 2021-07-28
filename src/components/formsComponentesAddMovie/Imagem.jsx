import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Imagem extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ value }
          name="imagePath"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
