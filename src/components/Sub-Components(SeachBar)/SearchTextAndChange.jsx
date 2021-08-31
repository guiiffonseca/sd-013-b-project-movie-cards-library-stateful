import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchTextAndChange extends Component {
  render() {
    const { searchText,
      onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            name="searchText"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </div>
    );
  }
}

SearchTextAndChange.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.isRequired,
};
