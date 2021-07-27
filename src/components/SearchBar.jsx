// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label data-testid="text-input-label" htmlFor="input-text">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              id="input-text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="input-check-box" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              type="checkbox"
              id="input-check-box"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
