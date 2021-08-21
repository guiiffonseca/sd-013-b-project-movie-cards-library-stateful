import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <div className="search-bar">
        <form data-testid="search-bar-form" action="#">
          <label data-testid="text-input-label" htmlFor="search-text">
            Inclui o texto:
            <input
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
              id="search-text"
              value={ searchText }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="only-favorites">
            <input
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              type="checkbox"
              name="only-favorites"
              id="only-favorites"
            />
            Mostrar somente favoritos
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired, // uma string
  onSearchTextChange: PropTypes.func.isRequired, // uma callback
  bookmarkedOnly: PropTypes.bool.isRequired, // um boolean
  onBookmarkedChange: PropTypes.func.isRequired, // uma callback
  selectedGenre: PropTypes.string.isRequired, // uma string
  onSelectedGenreChange: PropTypes.func.isRequired, // uma callback
};

export default SearchBar;
