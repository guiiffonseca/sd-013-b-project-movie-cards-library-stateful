import React from 'react';

class InputCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          id="checkbox"
        />
      </label>
    );
  }
}

export default InputCheckbox;