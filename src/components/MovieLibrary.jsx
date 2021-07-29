import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ () => 'test' }
          onBookmarkedChange={ () => 'test' }
          onSelectedGenreChange={ () => 'test' }
        />
        {/* <MovieList movie={ movie } /> */}
        <AddMovie onClick={ () => 'test' } />
      </div>
    );
  }
}

export default MovieLibrary;
