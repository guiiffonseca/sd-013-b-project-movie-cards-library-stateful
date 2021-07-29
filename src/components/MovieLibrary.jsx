// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { props } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ props.movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
