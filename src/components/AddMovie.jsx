// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoNumber: '0',
    };
  }

  handleChange(event) {
    this.setState({
      estadoNumber: event.target.value,
    });
  }

  render() {
    const { estadoNumber } = this.state;
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
        <label data-testid="storyline-input-label" htmlFor="textarea">
          Sinopse
          <textarea type="text" data-testid="textarea" />
        </label>
        <label data-testid="rating-input-label" htmlFor="title">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ estadoNumber }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
