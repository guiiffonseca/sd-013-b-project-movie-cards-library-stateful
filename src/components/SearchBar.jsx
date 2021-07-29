// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
      <form data-testid="search-bar-form">
        <fieldset>
          <label data-testid="text-input-label" htmlFor="input-text">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              id="input-text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="input-check-box" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              type="checkbox"
              id="input-check-box"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </fieldset>
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
