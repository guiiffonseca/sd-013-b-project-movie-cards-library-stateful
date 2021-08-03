import React from 'react';
import TextInput from './TextInput';

export default class SearchBar extends React.Component {
  render() {
    const { bookmarkedOnly,
      onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenreChange,
      searchText,
      selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form">
        <TextInput
          text="Inclui o texto"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="checkbox-input"
            name="checkbox-input"
            onChange={ onBookmarkedChange }
            type="checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select-input"
            name="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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