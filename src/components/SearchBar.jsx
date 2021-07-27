// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="mytextinput">
            Inclui o texto:
            <input
              type="text"
              id="mytextinput"
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
              data-testid="text-input"
            />
          </label>
          <label htmlFor="mycheckbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="mycheckbox"
              checked={this.props.bookmarkedOnly}
              onChange={this.props.onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>

          <label htmlFor="myselect" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="myselect"
              value={this.props.selectedGenre}
              onChange={this.props.onSelectedGenreChange}
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">
                Todos
              </option>
              <option value="action" data-testid="select-option">
                Ação
              </option>
              <option value="comedy" data-testid="select-option">
                Comédia
              </option>
              <option value="thriller" data-testid="select-option">
                Suspense
              </option>
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
