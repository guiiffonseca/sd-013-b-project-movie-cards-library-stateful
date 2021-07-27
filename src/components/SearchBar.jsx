// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return(
      
    )
  }
}

SearchBar.propTypes = {
    searchText: propTypes.string,
    onSearchTextChange: propTypes.func,
    bookmarkedOnly: propTypes.bool,
    onBookmarkedChange: propTypes.func,
    selectedGenre: propTypes.string,
    onSelectedGenreChange: propTypes.func,
}

export default SearchBar;