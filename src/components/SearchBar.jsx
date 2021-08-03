// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  generateInput = () => {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <>
        <label
          htmlFor="search-input"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>
        <label
          htmlFor="bookmarked"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            id="bookmarked"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </>
    );
  }

  render() {
    const { onSelectedGenreChange,
      selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.generateInput()}
        <label
          htmlFor="selectgenre"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option
              data-testid="select-option"
              value=""
            >
              Todos
            </option>
            <option
              data-testid="select-option"
              value="action"
            >
              Ação
            </option>
            <option
              data-testid="select-option"
              value="comedy"
            >
              Comédia
            </option>
            <option
              data-testid="select-option"
              value="thriller"
            >
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
};

export default SearchBar;
