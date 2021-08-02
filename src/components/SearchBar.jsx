import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              id="Inclui o texto"
              name="searchText"
              onChange={ onSearchTextChange }
              type="text"
              value={ searchText }
            />
          </label>
          <label htmlFor="filter-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              checked={ bookmarkedOnly }
              data-testid="checkbox-input"
              id="filter-checkbox"
              name="bookmarkedOnly"
              onChange={ onBookmarkedChange }
              type="checkbox"
            />
          </label>
          <label htmlFor="input-select-genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="input-select-genre"
              onChange={ onSelectedGenreChange }
              name="selectedGenre"
              value={ selectedGenre }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default SearchBar;
