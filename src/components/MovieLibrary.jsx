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
      filteredMovies: [...props.movies],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
      filteredMovies: this.filterMovies(),
    });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
      filteredMovies: this.filterBookmarked(checked),
    });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
      filteredMovies: this.filterGenre(value),
    });
  }

  filterGenre(value) {
    // const { selectedGenre } = this.state;
    const { movies } = this.props;
    if (value !== '') {
      return movies.filter((movie) => movie.genre === value);
    }
    return movies;
  }

  filterBookmarked(checked) {
    // const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    if (checked === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  filterMovies() {
    const { searchText } = this.state;
    const { movies } = this.props;
    const arrayMovies = movies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))
    ));
    return arrayMovies;
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ () => {} } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
