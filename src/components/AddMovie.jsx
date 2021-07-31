import React, { Component } from 'react';

export default class AddMovie extends Component {
  render() {
    return (
      <form htmlFor="true" data-testid="add-movie-form">
        <label htmlFor="true" data-testid="title-input-label">
          Título
          <input type="text" />
        </label>
      </form>
    );
  }
}
