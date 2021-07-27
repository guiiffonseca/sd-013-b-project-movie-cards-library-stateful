import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            name="search"
            value={ searchText }
            id="search"
            onChange={ this.onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  movie: PropTypes.exact({
    searchText: PropTypes.string,
    bookmarkedOnly: PropTypes.bool,
    selectedGenre: PropTypes.string,
  }).isRequired,
};

export default SearchBar;
