import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { value: imagePath, onChange: handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieImage;
