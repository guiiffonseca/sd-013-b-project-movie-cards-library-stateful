import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectMovieGenre from './search-bar-components/SelectMovieGenre';
import ShowOnlyFavorites from './search-bar-components/ShowOnlyFavorites';
import TextSearchingBar from './search-bar-components/TextSearchingBar';

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
      <form data-testid="search-bar-form">
        <TextSearchingBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <ShowOnlyFavorites
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SelectMovieGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
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
