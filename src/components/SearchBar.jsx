import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchTextValue,
      bookmarkedOnlyValue,
      selectedGenreValue,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text">
          <input
            data-testid="text-input-label"
            type="text"
            name="searchText"
            id="search-text"
            onChange={ onSearchTextChange }
            value={ searchTextValue }
          />
        </label>
        <label htmlFor="book-marked">
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="book-marked"
            onChange={ onBookmarkedChange }
            value={ bookmarkedOnlyValue }
          />
        </label>
        <label htmlFor="selected-genre">
          <input
            type="checkbox"
            name="selectedGenre"
            id="selected-genre"
            onChange={ onSelectedGenreChange }
            value={ selectedGenreValue }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchTextValue: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnlyValue: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenreValue: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};
