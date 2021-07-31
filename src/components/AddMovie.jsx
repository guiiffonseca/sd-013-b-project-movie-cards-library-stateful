// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input type="text" data-testid="title-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
