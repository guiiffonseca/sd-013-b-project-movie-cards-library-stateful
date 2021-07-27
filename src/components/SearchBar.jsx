import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onselectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="">Mostrar somente favoritos
        <input type="checkbox" />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.any,
  onBookmarkedChange: PropTypes.any,
  onSearchTextChange: PropTypes.string.isRequired,
  onselectedGenreChange: PropTypes.any,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.any
};

export default SearchBar;
