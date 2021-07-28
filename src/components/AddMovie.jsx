// implement AddMovie component here
// precisa ter estado gerenciado

import { tsThisType } from '@babel/types';
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange=""
          />
        </label>
        <br />
        <label htmlFor="sub-title" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="sub-title"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange=""
          />
        </label>
        <br />
        <label htmlFor="img-input" data-testid="image-input-label">
          Imagem
          <input
            id="img-input"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange=""
          />
        </label>
        <br />
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="sinopse"
            type="textarea"
            value={ storyLine }
            data-testid="storyline-input"
            onChange=""
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
