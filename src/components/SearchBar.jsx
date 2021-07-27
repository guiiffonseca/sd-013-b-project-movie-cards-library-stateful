import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
  }

  render() {
    const { searchText } = this.state;
    // const onSearchTextChange = '';
    // const bookmarkedOnly = '';
    // const onBookmarkedChange = '';
    // const selectedGenre = '';
    // const onSelectedGenreChange = '';

    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="text-input"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            id="text-input"
            data-testid="text-input"
            value={ searchText }
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
