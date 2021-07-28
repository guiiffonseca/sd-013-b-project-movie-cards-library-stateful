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
    this.filterMovie = this.filterMovie.bind(this);
  }

  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredByBookmarked = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies));
    const filteredBySearchText = filteredByBookmarked
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    const filteredByGenre = filteredBySearchText
      .filter((movie) => (selectedGenre === '' ? movies : movie.genre === selectedGenre));
    return filteredByGenre;
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
        <MovieList movies={ this.filterMovie() } />
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
