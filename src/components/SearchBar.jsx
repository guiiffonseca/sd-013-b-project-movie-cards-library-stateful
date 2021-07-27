import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, selectedGenre, onSelectedGenrechage } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label">
          <input type="text" data-testid="text-input-label" />
        </label>
      </form>
    );
  }
}
