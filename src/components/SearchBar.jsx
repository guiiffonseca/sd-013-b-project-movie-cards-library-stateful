// implement SearchBar component here
import React from 'react';
class SearchBar extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func
};
