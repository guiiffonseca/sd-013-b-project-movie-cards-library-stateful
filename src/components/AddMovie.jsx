// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input type="text" data-testid="title-input" />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label data-testid="rating-input-label" htmlFor="title">
          Avaliação
          <input type="number" data-testid="rating-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
