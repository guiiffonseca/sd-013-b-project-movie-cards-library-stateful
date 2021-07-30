import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
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

    this.onMovieChange = this.onMovieChange.bind(this);
    this.handleUpdateMovies = this.handleUpdateMovies.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(movie) {
    const { movies } = this.state;
    const filteredList = [...movies, movie];
    this.setState({ movies: filteredList });
  }

  handleUpdateMovies() {
    const { bookmarkedOnly, movies, selectedGenre, searchText } = this.state;
    const filteredMovie = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies))
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    return filteredMovie;
  }

  onMovieChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    //  const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onMovieChange }
          onBookmarkedChange={ this.onMovieChange }
          onSelectedGenreChange={ this.onMovieChange }
        />
        <MovieList movies={ this.handleUpdateMovies() } />
        <AddMovie onClick={ this.handleOnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
