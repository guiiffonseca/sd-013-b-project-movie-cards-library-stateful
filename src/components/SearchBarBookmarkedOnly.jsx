import React from 'react';
import PropTypes from 'prop-types';

class SearchBarBookmarkedOnly extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="checkbox-input"
          name="bookmarkedOnly"
          data-testid="checkbox-input"
          checked={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SearchBarBookmarkedOnly.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBarBookmarkedOnly;
