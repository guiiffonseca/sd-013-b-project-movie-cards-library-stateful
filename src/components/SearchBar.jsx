import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div></div>
    );
  }
}

export default SearchBar;
