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
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="search-text" data-testid="text-input-label">
              Inclui o texto:
              <input
                type="text"
                id="search-text"
                value={ searchText }
                onChange={ onSearchTextChange }
                data-testid="text-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="favorite" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                type="checkbox"
                id="favorite"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
                data-testid="checkbox-input"
              />
            </label>
          </div>
        </form>
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
    );
  }
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
