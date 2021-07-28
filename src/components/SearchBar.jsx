// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBarSearchText from './SearchBarSearchText';
import SearchBarBookmarkedOnly from './SearchBarBookmarkedOnly';
import SearchBarSelectedGenre from './SearchBarSelectedGenre';

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
      <form data-testid="search-bar-form">
        <SearchBarSearchText
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <SearchBarBookmarkedOnly
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <SearchBarSelectedGenre
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        />
      </form>
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
