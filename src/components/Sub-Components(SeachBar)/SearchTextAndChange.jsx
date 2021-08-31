/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchTextAndChange extends Component {
  render() {
    const { searchText,
      onSearchTextChange } = this.props;
    return (
      <div>
        <label className="imputTextLabel" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            type="text"
            name="name"
            onChange={ onSearchTextChange }
            data-testid="text-input"
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
