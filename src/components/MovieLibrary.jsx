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
    this.nomeDaFuncao = this.nomeDaFuncao.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChangeText({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.filterMovies();
  }

  handleChangeChecked({ target }) {
    const { name } = target;
    const { bookmarkedOnly } = this.state;
    const value = !bookmarkedOnly;
    this.setState({
      [name]: value,
    });
    this.filterMovies();
  }

  filterMovies() {
    let newArray = [];
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    if (bookmarkedOnly === true && selectedGenre === '' && searchText === '') {
      newArray = movies;
    }
    if (!bookmarkedOnly) {
      newArray = movies.filter((movie) => movie.bookmarked);
    } else {
      newArray = movies;
    }
    if (selectedGenre !== '') {
      newArray = newArray.filter((movie) => movie.genre.includes(selectedGenre));
    }
    if (searchText !== '') {
      newArray = newArray.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    this.setState({
      filteredMovies: newArray,
    });
  }

  nomeDaFuncao() {
    // Adicionar filmes no array movies
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
          onSearchTextChange={ this.handleChangeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeText }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.nomeDaFuncao } />
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
