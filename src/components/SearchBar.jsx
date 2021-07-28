// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleSearch from './SearchBarSubComponents/TitleSearch';
import FavoritesCheckBox from './SearchBarSubComponents/FavoritesCheckBox';
import GenreSelect from './SearchBarSubComponents/GenreSelect';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <TitleSearch
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <FavoritesCheckBox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <GenreSelect
          onSelectedGenreChange={ onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
      </form>

    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
