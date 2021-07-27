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
        
      </form>
    );
  }
}
