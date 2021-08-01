import React, { Component } from 'react';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from './src/data';

class MovieLibrary extends Component {
//   constructor() {
//     super();
//   }

  render() {
    // const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="text"
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
        {/* <MovieList movies={ movies } /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
