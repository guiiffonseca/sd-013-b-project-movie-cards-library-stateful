import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'Todos',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    const value = target.checked;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
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
            onChange={ this.onBookmarkedChange }
            value={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="selected-genre">
          <input
            type="checkbox"
            name="selectedGenre"
            id="selected-genre"
            onChange={ this.onSelectedGenreChange }
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
