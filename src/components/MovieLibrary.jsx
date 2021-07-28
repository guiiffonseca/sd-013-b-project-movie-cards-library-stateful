// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const call = () => {
      const texto = 'teste';
      console.log(texto);
    };
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ call }
          bookmarkedOnly={ false }
          onBookmarkedChange={ call }
          selectedGenre="abc"
          onSelectedGenreChange={ call }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ call } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {

//   movies: PropTypes.string.isRequired,

// };

export default MovieLibrary;
