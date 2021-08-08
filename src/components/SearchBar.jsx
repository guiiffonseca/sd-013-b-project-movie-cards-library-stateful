import React from 'react';
// import MovieList from './MovieList';

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
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
        </form>
      </div>
    );
  }
}

export default SearchBar;
