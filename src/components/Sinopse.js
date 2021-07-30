import React, { Component } from 'react';

class Sinopse extends Component {
  render() {
    const { value, handleTextareaChange } = this.props;//
    return (
      <label
        htmlFor="sinopse"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="sinopse"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleTextareaChange }
          rows="4"
          cols="50"
          name="comment"
          form="usrform"
        />
      </label>

    );
  }
}

export default Sinopse;
