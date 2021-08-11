import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input type="text" data-testid="title-input" title="" />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input type="text" data-testid="subtitle-input" subtitle="" />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input data-testid="image-input" image="" />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <input type="text" data-testid="storyline-input" synopsis="" />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input type="number" data-testid="rating-input" defaultValue={ 0 } />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select data-testid="genre-input" genre="action">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ onClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;
