import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <label
        data-testid="text-input-label"
        htmlFor="text-input"
      >
        Inclui o texto:
        <input
          data-testid="text-input"
          id="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchInput;
