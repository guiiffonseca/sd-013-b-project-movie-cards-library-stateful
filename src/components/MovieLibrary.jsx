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
    this.nomeDaFuncao = this.nomeDaFuncao.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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
    if (bookmarkedOnly === false || selectedGenre === '' || searchText === '') {
      this.setState({
        movies: this.props.movies,
      });
    } else if (bookmarkedOnly === true) {
      newArray = movies.filter((movie) => movie.bookmarked);
      this.setState({
        movies: newArray,
      });
    } else if (selectedGenre !== '') {
      newArray = movies.filter((movie) => movie.genre.includes(selectedGenre));
      this.setState({
        movies: newArray,
      });
    } else if (searchText !== '') {
      newArray = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
      this.setState({
        movies: newArray,
      });
    }
  }

  nomeDaFuncao() {
    // Adicionar filmes no array movies
  }

  render() {
    const { movies } = this.props;
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
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
        <MovieList movies={ movies } />
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
