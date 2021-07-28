// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import Titulo from './formsComponentesAddMovie/Titulo';
import Subtitulo from './formsComponentesAddMovie/Subtitulo';
import Imagem from './formsComponentesAddMovie/Imagem';
import Sinopse from './formsComponentesAddMovie/Sinopse';
import Avaliacao from './formsComponentesAddMovie/Avaliacao';
import Genero from './formsComponentesAddMovie/Genero';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(evt) {
    evt.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    const { handleClick } = this;

    return (
      <form
        data-testid="add-movie-form"
      >
        <Titulo value={ title } handleChange={ handleChange } />
        <Subtitulo value={ subtitle } handleChange={ handleChange } />
        <Imagem value={ imagePath } handleChange={ handleChange } />
        <Sinopse value={ storyline } handleChange={ handleChange } />
        <Avaliacao value={ rating } handleChange={ handleChange } />
        <Genero value={ genre } handleChange={ handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
