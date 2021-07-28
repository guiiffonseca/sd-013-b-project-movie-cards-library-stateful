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
  }

  handleChanges({ target }) {
    const { name } = target;
    // n deu certo -> type === 'checkbox' ? value = target.checked : value = value;
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

  render() {
    let { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    // se checkbox do bookmarkedOnly for true, lista apenas filmes marcados como favoritos:
    if (bookmarkedOnly === true) movies = this.favoriteMovies(movies);

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
