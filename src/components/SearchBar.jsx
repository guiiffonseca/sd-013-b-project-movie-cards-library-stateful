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
      <form data-testid="search-bar-form">
        <label
        htmlFor="search" 
        data-testid="text-input-label"
        >Inclui o texto</label>
        <input
        data-testid="text-input"
        id="search"
        value={ searchText }
        onChange={ onSearchTextChange }
        />
      </form>
    );
  }
}

export default SearchBar;
