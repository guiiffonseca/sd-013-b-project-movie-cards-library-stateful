// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange(event) {
    const { name, value } = event.target;
    console.log(value, name);
  }

  render() {
    const { props } = this;

    return (
      <form id="search-bar-form" data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            name="search-bar-form"
            value={ props.searchText }
            onChange={ props.onSearchTextChange }
            type="text"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ props.bookmarkedOnly }
            onChange={ props.onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ props.selectedGenre }
            onChange={ props.onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
