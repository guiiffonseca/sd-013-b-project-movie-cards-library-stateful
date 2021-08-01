import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectSearchBar from './SelectSearchBar';

class SearchBar extends Component {
  render() {
    // Requisito 1: this.props:
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      // requisito 2
      <form data-testid="search-bar-form">
        {/* requisito 3 */}
        <label htmlFor="searchMovie" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchMovie"
            type="text"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        {/* requisito 4 */}
        <label
          htmlFor="checkboxInput"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            id="checkboxInput"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <SelectSearchBar
          tagId="moviesGenre"
          testIdLabel="select-input-label"
          testIdTag="select-input"
          tagText="Filtrar por gênero"
          tagValue={ selectedGenre }
          tagChange={ onSelectedGenreChange }
        />
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
  // consultado em https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default SearchBar;
