import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImagePath extends React.Component {
  render() {
    const {
      imagePath,
      handleChange,
    } = this.props;

    return (
      <section>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem:
          <input
            type="text"
            id="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

AddMovieImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieImagePath;
