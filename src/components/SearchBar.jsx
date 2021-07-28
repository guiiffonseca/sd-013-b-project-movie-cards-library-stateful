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
      <form data-testid="search-bar-form">
        <input type="text" />
      </form>
    );
  }
}

export default SearchBar;
