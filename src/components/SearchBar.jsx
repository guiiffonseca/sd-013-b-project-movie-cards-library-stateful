import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenre } = this.props;

    return (
      <span>Olá</span>
    );
  }
}

export default SearchBar;
