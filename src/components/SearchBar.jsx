import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: ''};
  // }
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange, } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input" data-testid="text-input-label">
          Inclui o texto
          <input
            id="input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="check-box" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="check-box"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-drop" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-drop"
            data-testid="select-input"
            value={ selectedGenre }
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

export default SearchBar;
// SearchBar.propTypes = {
//   searchText: PropTypes.string.isrequired,
//   onSearchTextChange: PropTypes.func.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.func.isRequired,
// };
