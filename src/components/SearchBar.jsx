import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
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
      <div className="search-bar">
        <form data-testid="search-bar-form" action="#">
          <label data-testid="text-input-label" htmlFor="search-text">
            Inclui o texto:
            <input
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
              id="search-text"
              value={ searchText }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="only-favorites">
            <input
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              type="checkbox"
              id="only-favorites"
            />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="filter-genre">
            Filtrar por gênero
            <select
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
              id="filter-genre"
              value={ selectedGenre }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired, // uma string
  onSearchTextChange: PropTypes.func.isRequired, // uma callback
  bookmarkedOnly: PropTypes.bool.isRequired, // um boolean
  onBookmarkedChange: PropTypes.func.isRequired, // uma callback
  selectedGenre: PropTypes.string.isRequired, // uma string
  onSelectedGenreChange: PropTypes.func.isRequired, // uma callback
};

export default SearchBar;
