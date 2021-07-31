import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
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
        <label htmlFor data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
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
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenreValue: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};
