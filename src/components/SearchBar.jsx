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
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="includes" data-testid="text-input-label">
          Inclui o texto:
          <input
            onChange={ onSearchTextChange }
            value={ searchText }
            data-testid="text-input"
            type="text"
            name="searchText"
          />
        </label>
        <label htmlFor="show-only-bookmarks" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
          />
        </label>
        <label htmlFor="filter-by-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            data-testid="select-input"
            name="selectedGenre"
            id="filter-by-genre"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
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
