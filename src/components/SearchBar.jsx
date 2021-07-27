import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Busca de Filmes:
          <input
            data-testid="text-input"
            type="search"
            name="searchText"
            id="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <button type="submit">
          Procurar
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
