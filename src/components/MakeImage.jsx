import React from 'react';
import PropTypes from 'prop-types';

export default class MakeImage extends React.Component {
  render() {
    const {
      imagePath,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

MakeImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
