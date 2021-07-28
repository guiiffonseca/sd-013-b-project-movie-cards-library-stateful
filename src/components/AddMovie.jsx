// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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
    this.handle = this.handle.bind(this);
    this.inputsText = this.inputsText.bind(this);
  }

  handle(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  inputsText(title, subtitle, imagePath) {
    return (
      <>
        <label data-testid="title-input-label" htmlFor="add-input-text">
          Título
          <input
            type="text"
            id="add-input-text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handle }
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="add-input-text-2">
          Subtítulo
          <input
            type="text"
            id="add-input-text-2"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handle }
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="add-input-img">
          Imagem
          <input
            type="text"
            id="add-input-img"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handle }
            name="imagePath"
          />
        </label>
      </>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.inputsText(title, subtitle, imagePath) }
        <label data-testid="storyline-input-label" htmlFor="add-textarea">
          Sinopse
          <textarea
            id="add-textarea"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handle }
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="add-input-number">
          Avaliação
          <input
            type="number"
            id="add-input-number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handle }
            name="rating"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="add-select">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            id="add-select"
            name="genre"
            onChange={ this.handle }
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
