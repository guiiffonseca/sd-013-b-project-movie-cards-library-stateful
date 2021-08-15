import React from 'react';
import PropTypes from 'prop-types';

class SearchCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="check-movie"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos:
        <input
          id="check-movie"
          name="bookmarkedOnly"
          className="search-field"
          data-testid="checkbox-input"
          type="checkbox"
          value="ShowFavorites"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

SearchCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchCheckbox;
