import React from 'react';
import PropTypes from 'prop-types';
import SelectedGenre from './SelectedGenre';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly,
      selectedGenre, onSearchTextChange,
      onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form className="form" data-testid="search-bar-form">
          <fieldset>
            <legend>== Buscador de filmes ==</legend>
            <label htmlFor="searchText" data-testid="text-input-label">
              Inclui o texto:
              <input
                id="searchText"
                name="searchText"
                data-testid="text-input"
                type="text"
                value={ searchText }
                onChange={ onSearchTextChange }
              />
            </label>
            <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                id="bookmarkedOnly"
                name="bookmarkedOnly"
                data-testid="checkbox-input"
                type="checkbox"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
              />
            </label>
            <SelectedGenre
              selectedGenre={ selectedGenre }
              onSelectedGenreChange={ onSelectedGenreChange }
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
