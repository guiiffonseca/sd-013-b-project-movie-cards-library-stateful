import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInputs from './FormInputs';
import FormNumberInput from './FormNumberInput';

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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <FormInputs
          name="title"
          text="Título"
          id="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
        <FormInputs
          name="subtitle"
          text="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <FormInputs
          name="imagePath"
          text="Imagem"
          id="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <FormInputs
          name="storyline"
          text="Sinopse"
          id="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <FormNumberInput
          name="rating"
          text="Avaliação"
          id="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />

      </form>
    );
  }
}
AddMovies.PropTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
