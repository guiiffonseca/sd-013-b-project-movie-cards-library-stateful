import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  atualizarEstado = () => {
    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { atualizarEstado } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.setState;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            htmlFor="titulo"
            data-testid="title-input-label">
            Título
            <input 
              type="text"
              id="titulo"
              value={ title }
              data-testid="title-input"
              onChange={ atualizarEstado }
            />
          </label>
          <label
            htmlFor="subtitulo" 
            data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              id="subtitulo"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ atualizarEstado }
            />
          </label>
          <label
            htmlFor="imagem"
            data-testid="image-input-label">
            Imagem
            <input
              type="text"
              id="imagem"
              value={ imagePath }
              data-testid="image-input"
              onChange={ atualizarEstado }
            />
          </label>
          <label
            htmlFor="textarea"
            data-testid="storyline-input-label">
            Sinopse
            <textarea
              type="text"
              id="textarea"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ atualizarEstado }
            />
          </label>
          <label
            htmlFor="number"
            data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              id="number"
              value={ rating }
              data-testid="rating-input"
              onChange={ atualizarEstado }
            />
          </label>
          <label
            htmlFor="number"
            data-testid="genre-input-label">
            Gênero
            <select
              type="text"
              id="select"
              value={ genre }
              data-testid="genre-input"
              onChange={ atualizarEstado }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
