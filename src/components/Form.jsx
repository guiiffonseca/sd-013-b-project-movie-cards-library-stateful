import React from 'react';

class Form extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="insertText">
          <input
            data-testid="text-input"
            type="text"
            name="insertText"
            id="insertText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
          Inclui o texto:
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorite">
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="favorite"
            id="favorite"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" htmlFor="filterByGender">
          <select
            data-testid="select-input"
            name="filterByGender"
            id="filterByGender"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
          Filtrar por gênero
        </label>
      </form>
    );
  }
}

export default Form;
