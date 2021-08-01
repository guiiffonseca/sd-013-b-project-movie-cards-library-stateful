// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { name, value } = target;
    console.log(value, name);
  }

  render() {
    const { props } = this;
    return (
      <form id="search-bar-form" data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            id="text-input"
            type="text"
            name="searchText"
            value={ props.searchText }
            data-testid="text-input"
            onChange={ props.onSearchTextChange }
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={ props.bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ props.onBookmarkedChange }
          />
        </label>

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero

          <select
            id="select-input"
            name="selectedGenre"
            value={ props.selectedGenre }
            onChange={ props.onSelectedGenreChange }
            data-testid="select-input"
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
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
