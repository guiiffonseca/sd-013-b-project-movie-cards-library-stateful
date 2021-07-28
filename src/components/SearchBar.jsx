import React from 'react';
import PropTypes from 'prop-types';
import SearchSelect from './SearchSelect';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="search">
            Inclui o texto:
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
              name="search"
              id="search"
              data-testid="text-input"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox">
            Mostrar somente favoritos:
            <input
              data-testid="checkbox-input"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <SearchSelect funcao={ onSelectedGenreChange } value={ selectedGenre } />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
