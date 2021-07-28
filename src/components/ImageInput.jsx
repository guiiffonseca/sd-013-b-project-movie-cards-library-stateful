import React from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
