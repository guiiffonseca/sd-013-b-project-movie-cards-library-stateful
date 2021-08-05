import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  this.state = {
    searchText: '',
    bookmarkedOnly: false,
    selectedGenre: '',
    movies: { movies },
  };
};

updateMovies = () => {
  const { movies } = this.props;
  movies.filter((movie) => {});
}

  render() {
    const { bookmarkedOnly, movies, searchText, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }

export default MovieLibrary;
