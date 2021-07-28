// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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

    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleFilterChanges = this.handleFilterChanges.bind(this);
  }

  handleMovieChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleAddMovie(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  handleFilterChanges() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies))
      .filter((movie) => (selectedGenre === '' ? movies : movie.genre === selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleMovieChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleMovieChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleMovieChange }
        />
        <MovieList movies={ this.handleFilterChanges() } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};
