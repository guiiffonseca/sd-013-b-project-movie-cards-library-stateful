import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form data-testid="search-bar-form" action="#">
          <h1>Search Bar</h1>
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
