import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeacrhBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inp">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="inp"
            type="text"
            value={searchText }
            onChange={onSearchTextChange }
          />

        </label>

      </form>
    );
  }
}

SeacrhBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
}

export default SeacrhBar;
