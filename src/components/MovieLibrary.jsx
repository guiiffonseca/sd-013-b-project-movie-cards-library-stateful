import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  // constructor(props) {
  //   super(props);
  //   state = {

  //   };
  // }

  render() {
    return (
      <div>
        <AddMovie onClick="" />
        <SearchBar
          searchText=""
          onSearchTextChange=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
      </div>
    );
  }
}

export default MovieLibrary;
