// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="mytextinput">
            Inclui o texto:
            <input
              type="text"
              id="mytextinput"
              value={ p.searchText }
              onChange={ p.onSearchTextChange }
              data-testid="text-input"
              name="searchText"
            />
          </label>
          <label htmlFor="mycheckbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="mycheckbox"
              checked={ p.bookmarkedOnly }
              onChange={ p.onBookmarkedChange }
              data-testid="checkbox-input"
              name="bookmarkedOnly"
            />
          </label>
          <label htmlFor="myselect" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="myselect"
              value={ p.selectedGenre }
              onChange={ p.onSelectedGenreChange }
              data-testid="select-input"
              name="selectedGenre"
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
