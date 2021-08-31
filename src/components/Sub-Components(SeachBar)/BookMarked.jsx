import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookMarked extends Component {
  render() {
    const { bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="bookmarkedOnly"
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </div>
    );
  }
}

BookMarked.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
