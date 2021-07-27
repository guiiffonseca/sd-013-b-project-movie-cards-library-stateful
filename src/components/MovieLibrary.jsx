import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: undefined,
    };

    this.addMovieHandler = this.addMovieHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(e) {
    const { bookmarkedOnly } = this.state;
    if (e.target.name === 'bookmarkedOnly') {
      this.setState({
        bookmarkedOnly: !bookmarkedOnly,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  addMovieHandler(data) {
    const { movies: propMovies } = this.props;
    const { movies } = this.state;
    if (movies) {
      this.setState({
        movies: [...movies, data],
      });
    } else {
      this.setState({
        movies: [...propMovies, data],
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const { movies: propMovies } = this.props;

    let filteredMovies = movies || propMovies;

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.inputChangeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.inputChangeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.inputChangeHandler }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addMovieHandler } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ).isRequired,
};

export default MovieLibrary;
