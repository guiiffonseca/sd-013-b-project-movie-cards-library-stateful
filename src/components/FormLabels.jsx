import React from 'react';
import PropTypes from 'prop-types';

class FormLabels extends React.Component {
  render() {
    const { handleChange, addMovieState } = this.props;
    const { title, subtitle, imagePath, storyline } = addMovieState;
    // imagePath, storyline, rating title,
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            id="text"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
      </>
    );
  }
}

FormLabels.propTypes = {
  addMovieState: PropTypes.objectOf(PropTypes.string),
};

FormLabels.defaultProps = {
  addMovieState: PropTypes.objectOf(PropTypes.string),
};

export default FormLabels;
