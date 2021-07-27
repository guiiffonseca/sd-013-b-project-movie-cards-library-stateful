import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import Input from './Input';

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
        <Input
          id="search"
          label="Inclui o texto:"
          onChange={ onSearchTextChange }
          testidInput="text-input"
          testidLabel="text-input-label"
          type="text"
          value={ searchText }
        />
        <Input
          id="bookmark"
          label="Mostrar somente favoritos"
          onChange={ onBookmarkedChange }
          testidInput="checkbox-input"
          testidLabel="checkbox-input-label"
          type="checkbox"
          checked={ bookmarkedOnly }
        />
        <Select
          onSelectedGenreChange={ onSelectedGenreChange }
          selectedGenre={ selectedGenre }
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
