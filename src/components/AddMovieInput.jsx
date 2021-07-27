import React, { Component } from 'react';

class AddMovieInput extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title-input"
          name={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default AddMovieInput;
