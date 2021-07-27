// implement SearchBar component here
import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <h1> search bar</h1>
        <h1>
          { searchText }
          { onSearchTextChange }
          { bookmarkedOnly }
          { onBookmarkedChange }
          { selectedGenre }
          { onSelectedGenreChange }
        </h1>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
