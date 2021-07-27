import React from 'react';
import PropTypes from 'prop-types';

class TextCheckboxSelect extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <label
          htmlFor="text-input"
          data-testid="text-input-label"
        >
          Inclui o texto=
          <input
            onChange={ onSearchTextChange }
            id="text-input"
            data-testid="text-input"
            type="text"
            value={ searchText }
          />
        </label>
        <label
          htmlFor="checkbox-input"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            id="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </div>
    );
  }
}

TextCheckboxSelect.propTypes = {
  searchText: PropTypes.string
    .isRequired,
  onSearchTextChange: PropTypes.func
    .isRequired,
  bookmarkedOnly: PropTypes.bool
    .isRequired,
  onBookmarkedChange: PropTypes.func
    .isRequired,
  // selectedGenre: PropTypes.string
  //   .isRequired,
  // onSelectedGenreChange: PropTypes.func
  //   .isRequired,
};

export default TextCheckboxSelect;
