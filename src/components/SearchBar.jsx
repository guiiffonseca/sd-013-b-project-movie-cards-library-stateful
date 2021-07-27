import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange,
}) => (
  <form data-testid="search-bar-form">
    {
      console.log({
        selectedGenre,
        onSelectedGenreChange,
      })
    }
    <label
      data-testid="text-input-label"
      htmlFor="search"
    >
      Inclui o texto:
      <input
        data-testid="text-input"
        id="search"
        onChange={ onSearchTextChange }
        type="text"
        value={ searchText }
      />
    </label>
    <label
      data-testid="checkbox-input-label"
      htmlFor="bookmark"
    >
      Mostrar somente favoritos
      <input
        data-testid="checkbox-input"
        id="bookmark"
        onChange={ onBookmarkedChange }
        type="checkbox"
        checked={ bookmarkedOnly }
      />
    </label>
  </form>
);

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
