import React from 'react';
import PropTypes from 'prop-types';

class SearchText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="search-movie"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          id="search-movie"
          name="searchText"
          className="search-field"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchText;
