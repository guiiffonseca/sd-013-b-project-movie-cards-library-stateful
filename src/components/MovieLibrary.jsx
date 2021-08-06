import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';
// import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onClick = this.onClick.bind(this);
    this.state = {
      movies,
    };
  }

  onClick(newArray) {
    console.log(newArray);
    this.setState((old) => ({
      movies: [...old.movies, newArray],
    }));
    // console.log(movies);
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    console.log(searchText, bookmarkedOnly, selectedGenre);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
