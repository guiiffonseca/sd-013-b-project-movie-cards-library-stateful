import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import SelectInput from './SelectInput';
import InputTextArea from './InputTextArea';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const MOVIE_GENRES = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;

    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Inputs
          id="title-input"
          label="Título"
          value={ title }
          onChange={ this.handleChange }
        />
        <Inputs
          id="subtitle-input"
          label="Subtítulo"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Inputs
          id="image-input"
          label="Imagem"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <InputTextArea
          id="storyline-input"
          label="Sinopse"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Inputs
          id="rating-input"
          label="Avaliação"
          value={ rating }
          onChange={ this.handleChange }
        />
        <SelectInput
          id="genre-input"
          label="Gênero"
          value={ genre }
          onChange={ this.handleChange }
          options={ MOVIE_GENRES }
        />
        <button type="button" onClick={ this.handleClick } data-testid="send-button">
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
