import React from 'react';
import PropTypes from 'prop-types';

export default class ShowFavorites extends React.Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="checkbox"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

ShowFavorites.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
