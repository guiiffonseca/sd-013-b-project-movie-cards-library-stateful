import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import FormSelect from './FormSelect';

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
      <form className="search-bar" data-testid="search-bar-form">
        <TextInput
          label="Inclui o texto:"
          id="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />

        <label htmlFor="bookmarked-only" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="bookmarked-only"
            id="bookmarked-only"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>

        <FormSelect
          label="Filtrar por gênero"
          id="select-input"
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
