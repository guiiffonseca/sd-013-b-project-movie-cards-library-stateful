import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputsDefault from './InputsDefault';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }
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
      <div>
        <form
          data-testid="search-bar-form"
        >
          <InputsDefault searchText={ searchText } textChange={ onSearchTextChange } />
          <label
            htmlFor="favoritos"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="favoritos"
              name="search-bar-form"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="filmes" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name="cars"
              id="filmes"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>

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
