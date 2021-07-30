import React from 'react';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (

      <label data-testid="text-input-label" htmlFor="texto">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          id="texto"
        />
      </label>

    );
  }
}

export default InputText;
