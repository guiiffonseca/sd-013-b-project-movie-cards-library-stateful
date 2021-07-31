import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <section>
        <label
          htmlFor="search-bar-input"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            id="search-bar-input"
            placeholder="Buscar"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
      </section>
    );
  }
}

SearchBarInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarInput;
