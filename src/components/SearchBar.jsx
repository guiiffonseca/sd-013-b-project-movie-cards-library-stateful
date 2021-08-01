import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { props } = this;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="N" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="N"
            value={ props.searchText }
            onChange={ props.onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="A" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="A"
            name="bookmarkedOnly"
            type="checkbox"
            checked={ props.bookmarkedOnly }
            onChange={ props.onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="C" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            id="C"
            value={ props.selectedGenre }
            onChange={ props.onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
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
