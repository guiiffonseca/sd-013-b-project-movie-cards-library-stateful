import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class InputsDefault extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="search-bar-form"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          name="search-bar-form"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default InputsDefault;
