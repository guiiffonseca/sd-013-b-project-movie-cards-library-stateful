import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onAddMovie = this.onAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const filterMovieTitle = movies.filter((movie) => movie.title.includes(target.value));
    this.setState({
      searchText: target.value,
      movies: filterMovieTitle,
    });
  }

  onBookmarkedChange() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const filterBookmarkedMovies = movies.filter((movie) => movie.bookmarked === true);
    if (bookmarkedOnly === false) {
      return this.setState({
        bookmarkedOnly: true,
        movies: filterBookmarkedMovies,
      });
    }
    this.setState({
      bookmarkedOnly: false,
      movies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    if (target.value === '') {
      return this.setState({
        selectedGenre: '',
        movies,
      });
    }
    const filterMoviesByGender = movies.filter((movie) => movie.genre === target.value);
    this.setState({
      selectedGenre: target.value,
      movies: filterMoviesByGender,
    });
  }

  onAddMovie(back) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, back],
    });
  }

  render() {
    const { state,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      onAddMovie } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ onAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
