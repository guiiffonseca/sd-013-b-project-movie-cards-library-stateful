import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeacrhBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inp">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="inp"
            type="text"
            value={ searchText }
            name="searchText"
            onChange={ onSearchTextChange }
          />

        </label>

        <label data-testid="checkbox-input-label" htmlFor="radio">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="radio"
            type="radio"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onClick={ onBookmarkedChange }
          />
        </label>

        <label htmlFor="tipos" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="tipos"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="selectedGenre"
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

SeacrhBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SeacrhBar;
