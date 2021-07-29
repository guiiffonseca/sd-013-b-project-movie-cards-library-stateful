import React, { Component } from 'react';

class InputText extends Component {
  render() {
    const { value, handleTitleChange } = this.props;//
    return (
      <label
        htmlFor="text1"
        data-testid="title-input-label">
        Título
        <input
          name="text1"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ handleTitleChange }//
        />
      </label>

    );
  }
}

export default InputText;