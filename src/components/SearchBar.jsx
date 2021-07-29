import PropTypes from 'prop-types';
import React from 'react';

function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;
  return (
    <form data-testid="search-bar-form">
      <label data-testid="text-input-label" htmlFor="input-label">
        Inclui o texto:
        <input
          id="input-label"
          type="text"
          value={ searchText }
          data-testid="text-input"
          onChange={ onSearchTextChange }
        />
      </label>
      <label htmlFor="checkbox-label" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
