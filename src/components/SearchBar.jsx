import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            id="searchText"
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="favorite" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="checkbox"
            id="favorite"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
