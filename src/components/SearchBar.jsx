import React from 'react';
// import MovieList from './MovieList';

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    const bookmarkedOnly = this.props.bookmarkedOnly;
    const onBookmarkedChange = this.props.onBookmarkedChange;
    // const selectedGenre = this.props.selectedGenre;
    // const onSelectedGenreChange = this.props.onSelectedGenreChange;
    return (
      <div className="search-field">
        <form data-testid="search-bar-form">
          <label
            htmlFor="search-movie"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              id="search-movie"
              className="search-field"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <br />
          <label
            htmlFor="check-movie"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos:
            <input
              id="check-movie"
              className="search-field"
              data-testid="checkbox-input"
              type="checkbox"
              value={ 'ShowFavorites' }
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
