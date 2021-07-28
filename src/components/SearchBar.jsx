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
          id="text"
          name="searchText"
          labelText="Inclui o texto:"
          onChange={ onSearchTextChange }
          type="text"
          value={ searchText }
        />
        <Input
          id="checkbox"
          name="bookmarkedOnly"
          labelText="Mostrar somente favoritos"
          onChange={ onBookmarkedChange }
          type="checkbox"
          checked={ bookmarkedOnly }
        />
        <Select
          id="select"
          name="selectedGenre"
          genres={ [
            { value: '', optionText: 'Todos' },
            { value: 'action', optionText: 'Ação' },
            { value: 'comedy', optionText: 'Comédia' },
            { value: 'thriller', optionText: 'Suspense' },
          ] }
          labelText="Filtrar por gênero"
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
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
