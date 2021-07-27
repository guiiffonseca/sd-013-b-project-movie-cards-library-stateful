import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    // const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <input
            onChange={ this.handleChange }
            type="text"
            id="search"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        {/* <label htmlFor="gender">Filtrar por gênero:
          <select name="gender" id="gender" >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>

        </label> */}
      </form>

    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.string
}

export default  SearchBar;