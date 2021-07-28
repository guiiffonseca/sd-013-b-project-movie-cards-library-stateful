import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.updateState = this.updateState.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    movies.filter((movie) => (bookmarkedOnly ? movie.bookmarkedOnly : movie));
    movies.filter((movie) => (movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)));
    const filterGenre = movies
      .filter((movie) => (selectedGenre === '' ? movie.genre : movie));
    return filterGenre;
  }

  updateState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateState }
        />
        <MovieList movies={ this.filterMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};
