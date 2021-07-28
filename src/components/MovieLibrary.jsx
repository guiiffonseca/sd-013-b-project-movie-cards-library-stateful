// implement MovieLibrary component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.favoriteMovies = this.favoriteMovies.bind(this);
    this.genreMovies = this.genreMovies.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  favoriteMovies(movies) {
    const newMovies = [];
    movies.forEach((movie) => {
      if (movie.bookmarked === true) newMovies.push(movie);
    });
    return newMovies;
  }

  genreMovies(movies) {
    const newMovies = [];
    const { selectedGenre } = this.state;
    movies.forEach((movie) => {
      if (movie.genre === selectedGenre) newMovies.push(movie);
    });
    return newMovies;
  }

  textMovies(movies) {
    const newMovies = [];
    const { searchText } = this.state;
    movies.forEach((movie) => {
      if (movie.title.indexOf(searchText) > 0) newMovies.push(movie);
      if (movie.subtitle.indexOf(searchText) > 0) newMovies.push(movie);
      if (movie.storyline.indexOf(searchText) > 0) newMovies.push(movie);
    });
    return newMovies;
  }

  render() {
    let { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    // se checkbox do bookmarkedOnly for true, lista apenas filmes marcados como favoritos:
    if (bookmarkedOnly === true) movies = this.favoriteMovies(movies);
    // se selectedGenre não estiver vazio mostre apenas filmes com esse genero:
    if (selectedGenre !== '') movies = this.genreMovies(movies);
    // se searchText não estiver vazio mostra filmes com titulo, subtitulo ou sinopse com as letras/palavras:
    if (searchText !== '') movies = this.textMovies(movies);

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          SearchText={ searchText }
          onSearchTextChange={ this.handleChanges }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChanges }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChanges }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.number, propTypes.string).isRequired,
};

export default MovieLibrary;
