import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <body>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </body>

    );
  }
}

export default MovieLibrary;
