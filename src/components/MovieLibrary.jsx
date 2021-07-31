import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.bookMarkedFilter = this.bookMarkedFilter.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }


  //função baseada em diversos exemplos do course
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.movieFilter(value);
  }

  bookMarkedFilter() {
    const { movies, bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    }
  }

  movieFilter(value) {
    const { movies } = this.props;
    this.setState({
      movies: movies.filter((movie) => Object.values(movie).join().includes(value)),
    });
    this.bookMarkedFilter();
  }

  //  Função baseada no conteúdo do course (dia 13.1)
  addMovie(movie) {
    this.setState((stateBefore) => ({
      movies: [...stateBefore.movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
