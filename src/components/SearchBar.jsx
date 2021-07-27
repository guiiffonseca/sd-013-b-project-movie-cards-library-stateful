// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

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
        <label data-testid="text-input-label" htmlFor="search">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="search"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favoritesOnly">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectGenre">
          Filtrar por gênero
          <select
            type="select"
            onChange={ onSelectedGenreChange }
            id="selectGenre"
            value={ selectedGenre }
            data-testid="select-input"
          >
            <option value="" htmlFor="selectGenre" data-testid="select-option">Todos</option>
            <option value="action" htmlFor="selectGenre" data-testid="select-option">Ação</option>
            <option value="comedy" htmlFor="selectGenre" data-testid="select-option">Comédia</option>
            <option value="thriller" htmlFor="selectGenre" data-testid="select-option">Suspense</option>
          </select>

        </label>
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
