import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            Inclui o texto:
            <input
              value={ searchText }
              type="text"
              name=""
              id="Inclui o texto"
              data-testid="text-input"
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="filter-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked="bookmarkedOnly"
              onChange={ onBookmarkedChange }
              id="filter-checkbox"
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="input-select-genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="input-select-genre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
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
};

export default SearchBar;
