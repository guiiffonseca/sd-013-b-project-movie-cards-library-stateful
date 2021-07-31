import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'all',
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    //  onSearchTextChange,
    //   onBookmarkedChange,
    //   onSelectedGenreChange,
    return (
      <form>
        {/* 3 inputs e 3 callbacks */}
        <label htmlFor="search-text">
          <input
            type="text"
            name="searchText"
            id="search-text"
            onChange={ this.onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label htmlFor="book-marked">
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="book-marked"
            // onChange={ onBookmarkedChange }
            value={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="selected-genre">
          <input
            type="text"
            name="selectedGenre"
            id="selected-genre"
            // onSelectedGenreChange={ onSelectedGenreChange }
            value={ selectedGenre }
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
