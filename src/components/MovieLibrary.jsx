import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ () => 'test' }
          onBookmarkedChange={ () => 'test' }
          onSelectedGenreChange={ () => 'test' }
        />
        {/* <MovieList /> */}
        <AddMovie onClick={ () => 'test' } />
      </div>
    );
  }
}

export default MovieLibrary;
