import React from 'react';
import PropTypes from 'prop-types';

export default class FavoritesCheckBox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favoritesOnly">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

FavoritesCheckBox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
