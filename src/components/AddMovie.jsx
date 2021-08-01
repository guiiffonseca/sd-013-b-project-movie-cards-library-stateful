// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);

    this.state = {
      estadoNumber: '0',
      genre: '',
    };
  }

  handleChange(event) {
    this.setState({
      estadoNumber: event.target.value,
    });
  }

  handleChangeSelect(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { estadoNumber, genre } = this.state;
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
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChangeSelect }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
