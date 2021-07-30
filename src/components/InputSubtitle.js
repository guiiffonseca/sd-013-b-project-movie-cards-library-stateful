import React, { Component } from 'react';

class InputSubtitle extends Component {
  render() {
    const { value, handleSubTitleChange } = this.props;//
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ handleSubTitleChange }//
        />
      </label>

    );
  }
}

export default InputSubtitle;
