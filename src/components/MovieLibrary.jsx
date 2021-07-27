// implement MovieLibrary component here
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
          searchText="placeHolder"
          onSearchTextChange={ () => 1 + 2 }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => 1 + 2 }
          selectedGenre="placeHolder"
          onSelectedGenreChange={ () => 1 + 2 }
        />
        <div> adicionar MovieList movies= this.props.movies  </div>
        <AddMovie onClick={ () => 1 + 2 } />
      </div>
    );
  }
}

export default MovieLibrary;
