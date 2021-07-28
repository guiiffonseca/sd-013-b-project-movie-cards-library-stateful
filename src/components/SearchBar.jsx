import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid='search-bar-form'>
        <label htmlFor='search-input' data-testid='text-input-label'>
          Inclui o texto
          <input
            type='text'
            id='search-bar-input'
            name='search-bar-input'
            value={searchText}
            onChange={onSearchTextChange}
            data-testid='text-input'
          />
        </label>
        <label htmlFor='favorite-checkbox' data-testid='checkbox-input-label'>
          Mostrar somente favoritos
          <input
            type='checkbox'
            name='favorite-checkbox'
            id='favorite-checkbox'
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid='checkbox-input'
          />
        </label>
        <label htmlFor='search-bar-select' data-testid='select-input-label'>
          Filtrar por gênero
          <select
            id='search-bar-select'
            name='search-bar-select'
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid='select-input'
          >
            <option value='' data-testid='select-option'>
              Todos
            </option>
            <option value='action' data-testid='select-option'>
              Ação
            </option>
            <option value='comedy' data-testid='select-option'>
              Comédia
            </option>
            <option value='thriller' data-testid='select-option'>
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
