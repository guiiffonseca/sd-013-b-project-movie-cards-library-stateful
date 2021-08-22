import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
    this.renderMovieTitleInput = this.renderMovieTitleInput.bind(this);
    this.renderMovieSubtitleInput = this.renderMovieSubtitleInput.bind(this);
    this.renderMovieImagePathInput = this.renderMovieImagePathInput.bind(this);
    this.renderMovieStorylineInput = this.renderMovieStorylineInput.bind(this);
    this.renderMovieRatingInput = this.renderMovieRatingInput.bind(this);
    this.renderMovieGenreInput = this.renderMovieGenreInput.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    onClick({ subtitle, title, imagePath, storyline, rating, genre });
    this.setState(initialState);
  }

  renderMovieTitleInput() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="movie-title">
        Título:
        <input
          onChange={ (event) => this.setState({ title: event.target.value }) }
          data-testid="title-input"
          type="text"
          id="movie-title"
          value={ title }
        />
      </label>
    );
  }

  renderMovieSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="movie-subtitle">
        Subtítulo:
        <input
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
          data-testid="subtitle-input"
          type="text"
          id="movie-subtitle"
          value={ subtitle }
        />
      </label>
    );
  }

  renderMovieImagePathInput() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="movie-image-path">
        Imagem:
        <input
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
          data-testid="image-input"
          type="text"
          id="movie-image-path"
          value={ imagePath }
        />
      </label>
    );
  }

  renderMovieStorylineInput() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="movie-storyline">
        Sinopse:
        <textarea
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
          data-testid="storyline-input"
          type="text"
          id="movie-storyline"
          value={ storyline }
        />
      </label>
    );
  }

  renderMovieRatingInput() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="movie-rating">
        Avaliação:
        <input
          onChange={ (event) => this.setState({ rating: event.target.value }) }
          data-testid="rating-input"
          type="number"
          id="movie-rating"
          value={ rating }
        />
      </label>
    );
  }

  renderMovieGenreInput() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="movie-genre">
        Gênero:
        <select
          onChange={ (event) => this.setState({ genre: event.target.value }) }
          data-testid="genre-input"
          id="movie-genre"
          value={ genre }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderMovieTitleInput() }
        { this.renderMovieSubtitleInput() }
        { this.renderMovieImagePathInput() }
        { this.renderMovieStorylineInput() }
        { this.renderMovieRatingInput() }
        { this.renderMovieGenreInput() }
        <button
          onClick={ this.handleClick }
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
