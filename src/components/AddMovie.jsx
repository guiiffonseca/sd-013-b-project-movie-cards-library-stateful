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
              data-testid="subtitle-input"
              onChange={ atualizarEstado }
            />
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
