import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form action="" data-testId="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          Inclui o texto
          <input
            id="textInput"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
            data-testId="text-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
