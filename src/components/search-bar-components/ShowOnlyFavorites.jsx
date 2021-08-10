import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowOnlyFavorites extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="favorite" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="favorite"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

ShowOnlyFavorites.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default ShowOnlyFavorites;
