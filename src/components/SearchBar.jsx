import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            Inclui o texto:
            <input
              value={ searchText }
              type="text"
              name=""
              id="Inclui o texto"
              data-testid="text-input"
              onChange={ onSearchTextChange }
            />
            <label htmlFor="filter-checkbox" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                type="checkbox"
                checked="bookmarkedOnly"
                onChange={ onBookmarkedChange }
                id="filter-checkbox"
                data-testid="checkbox-input"
              />
            </label>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
};

export default SearchBar;
