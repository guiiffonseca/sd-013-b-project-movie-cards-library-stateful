import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label
        htmlFor="add-movie-image"
        data-testid="image-input-label"
      >
        Imagem:
        <input
          id="add-movie-image"
          className="search-field"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddImage;
