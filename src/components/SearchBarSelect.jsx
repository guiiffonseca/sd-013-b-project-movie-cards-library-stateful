import React from 'react';

class SearchBarSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          id="select"
        >
          <options data-testid="select-option" value="">Todos</options>
          <options data-testid="select-option" value="action">Ação</options>
          <options data-testid="select-option" value="comedy">Comédia</options>
          <options data-testid="select-option" value="thriller">Suspense</options>

        </select>
      </label>
    );
  }
}

export default SearchBarSelect;
