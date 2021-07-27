import React from 'react';
import PropTypes from 'prop-types';

class searchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="texto" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              name="texto"
              id=""
              value={ searchText }
              data-testid="text-input"
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="box" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="box"
              id=""
              data-testid="checkbox-input"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
            />
          </label>
          <label
            htmlFor="selecionar"
            data-testid="select-input-label"
          >
            Filtrar por gênero
          </label>
          <select
            name="selecionar"
            id=""
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </section>
    );
  }
}
PropTypes.searchBar = {
  searchText: PropTypes.string,
  onSearchTextChange: 'callback',
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: 'callback',
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: 'callback',
};
export default searchBar;
