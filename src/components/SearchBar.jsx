import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import InputsDefault from './InputsDefault';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

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
          <InputsDefault
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />
          <label
            htmlFor=""
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              name="search-bar-form"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label
            htmlFor="filmes"
            data-testid="select-input-label"
          >
            Filtrar por gênero
            <select name="cars" id="filmes" value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
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

export default SearchBar;
