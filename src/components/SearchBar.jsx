import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label data-testid="text-input-label" htmlFor="textInput">

          Inclui o texto

          <input
            data-testid="text-input"
            id="textInput"
            name="textInput"
            onChange={ onSearchTextChange }
            type="text"
            value={ searchText }
          />

        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkboxInput">

          Mostrar somente favoritos

          <input
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="checkboxInput"
            name="checkboxInput"
            onChange={ onBookmarkedChange }
            type="checkbox"
          />

        </label>
      </div>
    );
  }
}
