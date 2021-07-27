import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    return (
      <label htmlFor="">
        <input type="text" />
      </label>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
