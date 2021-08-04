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
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
          />
        </label>
      </section>
    );
  }
}

SearchBarCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarCheckbox;
