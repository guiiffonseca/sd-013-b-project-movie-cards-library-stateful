import React from 'react';
import PropTypes from 'prop-types';

class SearchMovies extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="add-text">
        Inclui o texto:
        <input
          id="add-text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

SearchMovies.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchMovies;
