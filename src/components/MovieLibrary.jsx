import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ () => 'test' }
          onBookmarkedChange={ () => 'test' }
          onSelectedGenreChange={ () => 'test' }
        />
        {/* <MovieList />
        <AddMovie onClick={ () => 'test' } /> */}
      </div>
    );
  }
}

export default MovieLibrary;
