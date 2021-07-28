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
      filteredMovies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterBySearchText = this.filterBySearchText.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.filterMovies());
  }

  onClick(newMovie) {
    this.setState((prevState) => ({
      filteredMovies: [...prevState.filteredMovies, newMovie],
    }));
  }

  filterByGenre(array, string) {
    return array.filter((movie) => movie.genre.includes(string));
  }

  filterBySearchText(array, string) {
    return array.filter((movie) => movie.title.includes(string)
    || movie.subtitle.includes(string)
    || movie.storyline.includes(string));
  }

  filterMovies() {
    let newMovies = [];
    const {
      bookmarkedOnly,
      movies,
      selectedGenre,
      searchText,
    } = this.state;
    if (bookmarkedOnly) {
      newMovies = movies.filter((movie) => movie.bookmarked);
      if (selectedGenre) {
        newMovies = this.filterByGenre(newMovies, selectedGenre);
        if (searchText) {
          console.log(searchText);
          newMovies = this.filterBySearchText(newMovies, searchText);
        }
      } else {
        this.filterBySearchText(newMovies, searchText);
      }
    } else {
      newMovies = movies;
      if (selectedGenre) {
        newMovies = this.filterByGenre(newMovies, selectedGenre);
        if (searchText) {
          newMovies = this.filterBySearchText(newMovies, searchText);
        }
      } else {
        newMovies = this.filterBySearchText(newMovies, searchText);
      }
    }
    this.setState({ filteredMovies: newMovies });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      filteredMovies,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.onClick } />
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
