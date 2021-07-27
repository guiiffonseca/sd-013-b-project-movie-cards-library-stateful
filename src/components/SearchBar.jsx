// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange
    } = this.props;

    return (
      <nav>
        <h1>oi</h1>
      </nav>
    );
  }
}

export default SearchBar;
