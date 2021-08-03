import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <section>
        <input
          value={ searchText }
          type="text"
          onChange={ onSearchTextChange }
        />
        <input
          checked={ bookmarkedOnly }
          type="checkbox"
          onChange={ onBookmarkedChange }
        />
        <select>
          <option
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            Todos
          </option>
        </select>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
