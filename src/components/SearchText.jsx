import React from 'react';
import PropTypes from 'prop-types';

export default class SearchText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          id="text"
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
