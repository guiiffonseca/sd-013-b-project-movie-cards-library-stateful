import React from 'react';
import PropTypes from 'prop-types';

export default class MovieImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          value={ imagePath }
          type="text"
          name="imagePath"
          id="image"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

MovieImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
