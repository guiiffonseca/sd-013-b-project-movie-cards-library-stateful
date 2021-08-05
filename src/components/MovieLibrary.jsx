import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  filtredMovies = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const searchedMovies = movies
      .filter(({ title, subtitle, storyline }) => title.toLowerCase()
        .includes(searchText.toLowerCase())
     || subtitle.toLowerCase().includes(searchText.toLowerCase())
     || storyline.toLowerCase().includes(searchText.toLowerCase()));

    const favoritMovies = searchedMovies
      .filter(
        (movie) => (bookmarkedOnly === true ? movie
          .bookmarked === bookmarkedOnly : movies),
      );

    const filterByGenre = favoritMovies
      .filter((movie) => (!selectedGenre ? movies : movie.genre === selectedGenre));

    return filterByGenre;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieClick = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div id="movie-library-container">
        <AddMovie onClick={ this.addMovieClick } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filtredMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};
