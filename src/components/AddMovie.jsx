import React, { Component } from "react";

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value})
  }

  render() {
    const { rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea name="" data-testid="storyline-input" id="" cols="30" rows="10" />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            onChange={ this.handleChanges }
            value={ rating }
            type="number"
            data-testid="rating-input"
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
