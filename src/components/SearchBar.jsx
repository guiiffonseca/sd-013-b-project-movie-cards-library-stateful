import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: ''};
  // }
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange, } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input" data-testid="text-input-label">
          Inclui o texto
          <input
            id="input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="check-box" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="check-box"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
// SearchBar.propTypes = {
//   searchText: PropTypes.string.isrequired,
//   onSearchTextChange: PropTypes.func.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.func.isRequired,
// };
