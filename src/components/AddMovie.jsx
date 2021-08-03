import React, { Component } from 'react';
import Inputs from './Inputs';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

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
          name="title"
          id="title-input"
          label="Título"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />

        <Inputs
          name="subtitle"
          id="subtitle-input"
          label="Subtítulo"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />

        <Inputs
          name="imagePath"
          id="image-input"
          label="Imagem"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

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
