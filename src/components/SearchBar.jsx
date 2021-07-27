import React from 'react';

const SearchBar = ({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange,
}) => (
  <form data-testid="search-bar-form" >
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
  </form>
)

export default SearchBar;
