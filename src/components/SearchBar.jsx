import React from 'react';
// https://stackoverflow.com/questions/45692537/proptypes-is-not-defined
// Para resolver PropTypes is nor defined:
// npm install --save prop-types
import PropTypes from 'prop-types';

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
            esLint={
              selectedGenre
              + onSelectedGenreChange
            }
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
