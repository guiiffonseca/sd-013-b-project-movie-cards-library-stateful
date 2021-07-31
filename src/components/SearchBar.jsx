import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,
    // } = this.props;
    return (
      <form>
        {/* 3 inputs e 3 callbacks */}
        <label htmlFor="search-text">
          <input
            type="text"
            name=""
            id="search-text"
            onSearchTextChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="book-marked">
          <input
            type="checkbox"
            name=""
            id="book-marked"
            onBookmarkedChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="selected-genre">
          <input
            type="text"
            name=""
            id="selected-genre"
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.string.isRequired,
//   bookmarkedOnly: PropTypes.string.isRequired,
//   onBookmarkedChange: PropTypes.string.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.string.isRequired,
// };
