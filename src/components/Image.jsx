import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagepath, handleChange } = this.props;
    return (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagepath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagepath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Image;
