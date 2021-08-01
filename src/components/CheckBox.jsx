import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="checkbox-input"
          type="checkbox"
          name="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
