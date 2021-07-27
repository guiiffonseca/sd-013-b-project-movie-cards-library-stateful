import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import CheckInput from './CheckInput';
import SelectInput from './SelectInput';

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
      <div>

        <form data-testid="search-bar-form">
          <TextInput
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />

          <CheckInput
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />

          <SelectInput
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
