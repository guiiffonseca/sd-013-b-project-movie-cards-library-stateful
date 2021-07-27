import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const { bookmarkedOnly,
      onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenreChange,
      searchText,
      selectedGenre} = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="textInput">
          Inclui o texto
          <input
            data-testid="text-input"
            id="textInput"
            name="textInput"
            onChange={ onSearchTextChange }
            type="text"
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkboxInput">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="checkboxInput"
            name="checkboxInput"
            onChange={ onBookmarkedChange }
            type="checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectInput">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="selectInput"
            name="selectInput"
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
