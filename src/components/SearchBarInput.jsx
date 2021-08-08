import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          id="text-input"
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarInput;
