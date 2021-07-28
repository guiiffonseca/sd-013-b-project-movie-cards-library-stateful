// implement SearchBar component here
import React from 'react';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
import SearchBarSelect from './SearchBarSelect';

class SearchBar extends React.Component {
  render() {

    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">

          <InputText
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />

          <InputCheckbox
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />

          <SearchBarSelect
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />

        </form>
      </div>
    );
  }
}

export default SearchBar;
