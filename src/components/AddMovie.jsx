// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoNumber: '0',
      genre: '',
      storyline: undefined,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estadoNumber, genre, storyline } = this.state;
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
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="title">
          Avaliação
          <input
            name="estadoNumber"
            type="number"
            data-testid="rating-input"
            value={ estadoNumber }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
