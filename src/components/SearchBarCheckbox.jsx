import React from 'react';
import PropTypes from 'prop-types';

class SearchBarCheckbox extends React.Component {
  render() {
    const {
      onBookmarkedChange,
      bookmarkedOnly,
    } = this.props;

    return (
      <section>
        <label
          htmlFor="search-bar"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="search-bar"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </section>
    );
  }
}

SearchBarCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarCheckbox;
