import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImg extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imagePath-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath-input"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
          name="image"
        />
      </label>
    );
  }
}

AddMovieImg.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieImg;
