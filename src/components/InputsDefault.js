import React, { Component } from 'react';

class InputsDefault extends Component {
  render() {
    const { searchText, textChange } = this.props;
    return (
      <label
        htmlFor="search-bar-form"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          name="search-bar-form"
          type="text"
          value={ searchText }
          onChange={ textChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default InputsDefault;
