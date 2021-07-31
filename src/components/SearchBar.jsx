/* eslint-disable max-lines-per-function */
import PropTypes from 'prop-types';
import React from 'react';
import SearchSelectInput from './SearchSelectInput';

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
      {/* <TextInput label="text" text="" type="text" /> */}
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
      <SearchSelectInput
        value={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
