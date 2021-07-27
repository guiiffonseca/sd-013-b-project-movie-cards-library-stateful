import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="N" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="N"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="A" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ this.props.bookmarkedOnly }
            onChange={ this.props.onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="C" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name=""
            id="C"
            value={ this.props.selectedGenre }
            onChange={ this.props.onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
