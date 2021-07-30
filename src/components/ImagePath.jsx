import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          valor={ valor }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
