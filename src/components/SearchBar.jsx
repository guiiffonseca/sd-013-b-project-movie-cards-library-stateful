import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Input from './Input';
import CheckBox from './CheckBox';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    console.log(this.props);
    return (
      <form data-testid="search-bar-form">
        <Input
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <CheckBox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <Select
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
