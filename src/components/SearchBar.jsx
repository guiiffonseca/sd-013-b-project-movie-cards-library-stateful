import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnlyValue,
      selectedGenreValue,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnlyValue: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenreValue: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};
