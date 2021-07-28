import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          Inclui o texto
          <input
            id="textInput"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkbot-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="checkbot-input"
            type="checkbox"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="select-form" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name=""
            id="select-form"
            value={ selectedGenre }
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
