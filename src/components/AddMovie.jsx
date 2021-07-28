import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  textInputs() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
            type="text"
            name="title"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            onChange={ this.handleChange }
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            value={ imagePath }
            name="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>

    );
  }

  render() {
    return (
      <form>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;
