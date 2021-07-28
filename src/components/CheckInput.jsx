import React from 'react';
import PropTypes from 'prop-types';

class CheckInput extends React.Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <label htmlFor="check-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name=""
          id="check-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

CheckInput.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default CheckInput;
