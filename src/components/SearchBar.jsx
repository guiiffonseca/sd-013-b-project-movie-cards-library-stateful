import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="text-area" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text-area"
              name="text-area"
              value={ searchText }
              type="text"
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="check" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="check"
              name="check"
              checked={ bookmarkedOnly }
              type="checkbox"
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="genre"
              name="genre"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.book,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.string,
  selectedGenre: PropTypes.func,
}.isRequired;

export default SearchBar;
