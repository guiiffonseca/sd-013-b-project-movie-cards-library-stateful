import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="searchText"
          />
        </label>
        <label htmlFor="onlyMarked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            type="checkbox"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="onlyMarked"
          />
        </label>
        <select>
          <option
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            Todos
          </option>
        </select>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
