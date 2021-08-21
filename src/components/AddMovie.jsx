/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="movie-title">
          Título
          <input
            onChange={ (event) => this.setState({ title: event.target.value }) }
            data-testid="title-input"
            type="text"
            id="movie-title"
            value={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="movie-subtitle">
          Subtítulo
          <input
            onChange={ (event) => this.setState({ subtitle: event.target.value }) }
            data-testid="subtitle-input"
            type="text"
            id="movie-subtitle"
            value={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="movie-image-path">
          Imagem
          <input
            onChange={ (event) => this.setState({ imagePath: event.target.value }) }
            data-testid="image-input"
            type="text"
            id="movie-image-path"
            value={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="movie-storyline">
          Sinopse
          <textarea
            onChange={ (event) => this.setState({ storyline: event.target.value }) }
            data-testid="storyline-input"
            type="text"
            id="movie-storyline"
            value={ storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="movie-rating">
          Avaliação
          <input
            onChange={ (event) => this.setState({ rating: event.target.value }) }
            data-testid="rating-input"
            type="number"
            id="movie-rating"
            value={ rating }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="movie-genre">
          Gênero
          <select
            onChange={ (event) => this.setState({ genre: event.target.value }) }
            data-testid="genre-input"
            id="movie-genre"
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
