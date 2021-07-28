import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const filterMovies = movies.filter((movie) => movie.bookmarked === true);
    if (bookmarkedOnly === false) {
      return this.setState({
        bookmarkedOnly: true,
        movies: filterMovies,
      });
    } this.setState({
      bookmarkedOnly: false,
      movies,
    });
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onSelectedGenreChange = ({ target }) => {
    const { movies } = this.props;
    const { value } = target;
    if (value === '') {
      return this.setState({
        selectedGenre: '',
        movies,
      });
    }
    const filterGenreMovies = movies.filter((movie) => movie.genre === value);
    this.setState({
      selectedGenre: value,
      movies: filterGenreMovies,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
