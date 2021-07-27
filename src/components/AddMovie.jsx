import React, { Component } from 'react';
// import AddMovieInputs from './AddMovieInputs';

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
    this.handleChange = this.handleChange.bind(this);
    // this.runOnClick = this.runOnClick.bind(this);
  }

  handleChange({ name, value }) {
    this.setState({ [name]: value });
  }

  // runOnClick() {

  // }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        {/* <AddMovieInputs props={ { type, data-testid, id, name, onChange }} /> */}
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
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            data-testid="subtitle-input"
            id="title-input"
            name={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline-input"
            cols="30"
            rows="10"
            name={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            id="rating-input"
            name={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            id="genre-input"
            name={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        {/* <button
          type="button"
          data-testid="send-button"
          onClick={ this.runOnClick }
        >
          Adicionar filme
        </button> */}
      </form>
    );
  }
}

export default AddMovie;
