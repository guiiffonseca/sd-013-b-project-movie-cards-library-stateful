import React from 'react';
import PropTypes from 'prop-types';

class SearchBarCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="checkbox-input"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

SearchBarCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarCheckbox;
