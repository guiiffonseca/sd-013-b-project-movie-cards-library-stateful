// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            id="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <br />
        <label htmlFor="bookMark" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="bookMark"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <br />
        <label htmlFor="filter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="filter"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
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

export default SearchBar;
