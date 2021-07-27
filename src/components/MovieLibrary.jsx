// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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

    this.globalChange = this.globalChange.bind(this);
    this.getFilteredMovies = this.getFilteredMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  getFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredByBookmarked = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies));
    const filteredBySearchText = filteredByBookmarked
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    const filteredByGenre = filteredBySearchText
      .filter((movie) => (selectedGenre === '' ? movies : movie.genre === selectedGenre));
    return filteredByGenre;
  }

  globalChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.globalChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.globalChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.globalChange }
        />
        <MovieList movies={ this.getFilteredMovies() } />
        <AddMovie onClick={ this.addMovie } />
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
