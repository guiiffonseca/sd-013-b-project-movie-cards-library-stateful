import React from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
    );
  }
}
