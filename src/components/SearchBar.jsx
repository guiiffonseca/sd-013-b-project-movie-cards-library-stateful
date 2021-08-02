// implement SearchBar component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          <input
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}
