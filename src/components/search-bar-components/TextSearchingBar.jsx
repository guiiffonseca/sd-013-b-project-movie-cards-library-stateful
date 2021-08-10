import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextSearchingBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="search-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }
}

TextSearchingBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default TextSearchingBar;
