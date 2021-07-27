import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
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
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};

export default SearchBar;
