import React from 'react';
import PropTypes from 'prop-types';

class SearchBarSearchText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="searchText"
          name="searchText"
          type="text"
          data-testid="text-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SearchBarSearchText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBarSearchText;
