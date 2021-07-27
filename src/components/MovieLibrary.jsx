import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
