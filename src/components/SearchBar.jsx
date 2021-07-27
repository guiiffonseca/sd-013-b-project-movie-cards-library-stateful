// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="Incluiotexto" data-testid="text-input-label">

          Inclui o texto:
          <input
            id="Incluiotexto"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>

        <label htmlFor="check" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            data-testid="checkbox-input"
            id="check"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />

        </label>
        <Select value={ selectedGenre } onValue={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {

  onSearchTextChange: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.bool.isRequired,

};

export default SearchBar;
