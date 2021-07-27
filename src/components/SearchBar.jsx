import React from 'react';
// https://stackoverflow.com/questions/45692537/proptypes-is-not-defined
// Para resolver PropTypes is nor defined:
// npm install --save prop-types
import PropTypes from 'prop-types';
import Select from './Select';
import TextCheckboxSelect from './TextCheckboxSelect copy';

class SearchBar extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchText: '',
  //   };

  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  // }

  // onSearchTextChange(event) {
  //   this.setState({
  //     searchText: event.target.value,
  //   });
  //   console.log(this.state.searchText);
  // }

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
      <form
        data-testid="search-bar-form"
      >
        <TextCheckboxSelect
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <Select
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string
    .isRequired,
  onSearchTextChange: PropTypes.func
    .isRequired,
  bookmarkedOnly: PropTypes.bool
    .isRequired,
  onBookmarkedChange: PropTypes.func
    .isRequired,
  selectedGenre: PropTypes.string
    .isRequired,
  onSelectedGenreChange: PropTypes.func
    .isRequired,
};

export default SearchBar;
