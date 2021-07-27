import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeacrhBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inp">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="inp"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />

        </label>

        <label data-testid="checkbox-input-label" htmlFor="radio">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="radio"
            type="radio"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

      </form>
    );
  }
}

SeacrhBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SeacrhBar;
