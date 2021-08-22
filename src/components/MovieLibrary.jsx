import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange(event) {
    const { movies: moviesProp } = this.props;
    const searchText = event.target.value;
    const movies = moviesProp.filter(
      (movie) => movie.title.match(new RegExp(searchText, 'i'))
        || movie.subtitle.match(new RegExp(searchText, 'i'))
      || movie.storyline.match(new RegExp(searchText, 'i')),
    );

    this.setState({ searchText, movies });
  }

  onBookmarkedChange(event) {
    const { movies: moviesProp } = this.props;
    const searchBookmarked = event.target.checked;
    const movies = searchBookmarked
      ? moviesProp.filter((movie) => movie.bookmarked)
      : moviesProp;

    this.setState({ movies, bookmarkedOnly: searchBookmarked });
  }

  onSelectedGenreChange(event) {
    const { movies: moviesProp } = this.props;
    const selectedGenre = event.target.value;
    const movies = selectedGenre
      ? moviesProp.filter((movie) => movie.genre === selectedGenre)
      : moviesProp;

    this.setState({ movies, selectedGenre });
  }

  addMovie(movie) {
    const { movies } = this.props;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ movies } />
        <AddMovie onCLick={ this.addMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
