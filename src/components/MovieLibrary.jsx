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
        <SearchBar
          searchText=""
          onSearchTextChange=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
        <AddMovie onClick="" />
      </div>
    );
  }
}

export default MovieLibrary;
