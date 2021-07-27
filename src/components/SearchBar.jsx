// implement SearchBar component here

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <main>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Incluir o texto:
            <input
              type="text"
              name="searchText"
              id="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="bookmarkedOnly"
              id="bookmarkedOnly"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="bookmarkedOnly" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name={ name }
              value={ selectedGenre }
              onChange={ handleChange }
            >
              <option value="" />
              {options.map((option) => <option key={ option } value={ option }>{option}</option>)}
            </select>
          </label>
        </form>
      </main>

    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
