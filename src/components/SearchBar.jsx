import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <label data-testid="text-input-label" htmlFor="input">

        Inclui o texto:

        <input
          data-testid="text-input"
          id="input"
          name="text"
          onChange={ onSearchTextChange }
          type="text"
          value={ searchText }
        />

      </label>
    );
  }
}
