import React from 'react';
import PropTypes from 'prop-types';

export default class ShowFavorites extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favorite">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          id="favorite"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

ShowFavorites.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
