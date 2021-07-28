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
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filteredMovies() {
    const { movies, searchText } = this.state;
    const filteredByTexts = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    if (searchText !== '') {
      return filteredByTexts;
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};
export default MovieLibrary;
