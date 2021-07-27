// implement SearchBar component here
import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input-text">
          Inclui o texto:
          <input
            type="text"
            onChange={ onSearchTextChange }
            id="input-text"
            data-testid="text-input"
            value={ searchText }
            name="searchText"
          />
        </label>
        <label
          htmlFor="favoritos-checkbox"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="favoritos-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
        <label htmlFor="genre-select" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            name="selectedGenre"
            id="genre-select"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
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
