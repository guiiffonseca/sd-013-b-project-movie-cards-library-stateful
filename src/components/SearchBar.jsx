// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form id="select-bar-form" data-testid="select-bar-form">
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="text"
            id="text"
            valor={ searchText }
            onChange={ onSearchTextChange } />
        </label>

        <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input" />
        </label>

        <label htmlFor="selections" data-testid="select-input-label">
          <select name="selections" id="selections" value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
            Filtrar por gênero
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

export default SearchBar;
