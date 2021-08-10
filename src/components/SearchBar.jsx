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
        <form
          action=""
          method=""
          data-testid="search-bar-form"
        >
          <div>
            <label
              htmlFor="search-text"
              data-testid="text-input-label"
            >
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
        </form>
        {bookmarkedOnly}
        {onBookmarkedChange}
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
