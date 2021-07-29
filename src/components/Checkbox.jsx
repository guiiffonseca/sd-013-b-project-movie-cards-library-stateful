import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="bookmarkedOnly"
      >
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          id="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default Checkbox;
