import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" id="search-bar">
        <h4>Search Movie</h4>
        <label htmlFor data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label htmlFor="favorite" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor data-testid="select-input-label">
          Filtrar por gênero
          <select
            type="checkbox"
            name="selectedGenre"
            data-testid="select-input"
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: undefined,
  onSearchTextChange: undefined,
  bookmarkedOnly: undefined,
  onBookmarkedChange: undefined,
  selectedGenre: undefined,
  onSelectedGenreChange: undefined,
};
