import React from 'react';
import PropTypes from 'prop-types';

export default class TitleSearch extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="search">
        Inclui o texto:
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          id="search"
          name="searchText"
        />
      </label>
    );
  }
}

TitleSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
