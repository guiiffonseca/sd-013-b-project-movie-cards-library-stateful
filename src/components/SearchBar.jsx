import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Checkbox from './Checkbox';
import SearchInput from './SearchInput';

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
      <div className="search-div form-div">
        <h3>Search</h3>
        <form
          data-testid="search-bar-form"
          className="form search-form"
        >
          <SearchInput
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />
          <Checkbox
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />
          <Select
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
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
