import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <section>
        <form>
          <label htmlFor="text-area">
            Inclui texto:
            <input
              id="text-area"
              name="text-area"
              value={ searchText }
              type="text"
              onChange={ onSearchTextChange }
            />
          </label>

          <label htmlFor="check">
            Mostrar somente os favoritos:
            <input
              id="check"
              name="check"
              value={ bookmarkedOnly }
              type="checkbox"
              onChange={ onBookmarkedChange }
            />
          </label>

          <label htmlFor="genre">
            Filtrar por gênero
            <select
              id="genre"
              name="genre"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
            >
              <option value="all">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>

            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.book,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.string,
  selectedGenre: PropTypes.func,
}.isRequired;

export default SearchBar;
