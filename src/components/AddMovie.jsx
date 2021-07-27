import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="titulo-input"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitulo-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitulo-input"
            name="subtitle"
            value={subtitle}
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            type="text"
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="textarea-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textarea-input"
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            id="select-input"
            name="genre"
            data-testid="genre-input"
            value={ genre }
          >
            <option
              value="action"
              data-testid="genre-option"
            >
              Avaliação
            </option>
            <option
              value="comedy"
              data-testid="genre-option"
            >
              Comédia
            </option>
            <option
              value="thriller"
              data-testid="genre-option"
            >
              Suspense
            </option>
          </select>
        </label>
        <button data-testid="send-button" onSubmit={ () => onClick(this.state) }>Adicionar filmes</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
