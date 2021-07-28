import React from 'react';
import PropTypes from 'prop-types';

export default class AddImage extends React.Component {
  render() {
    const { handleChange, imagePath } = this.props;
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

AddImage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
