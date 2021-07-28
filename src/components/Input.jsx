import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

Input.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
