import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="imagePath"
      >
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          id="imagePath"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
