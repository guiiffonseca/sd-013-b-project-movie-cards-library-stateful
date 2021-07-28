import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddGenre from './ComponentsDoAddMovie/AddGenre';
import AddRating from './ComponentsDoAddMovie/AddRating';
import AddSinopse from './ComponentsDoAddMovie/AddSinopse';
import Button from './ComponentsDoAddMovie/Button';

// Requisitos feito com ajuda da documentacao sobre Fom
// https://pt-br.reactjs.org/docs/forms.html

export default class AddMovie extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            value={ title }
            id="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="input-subtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <AddSinopse value={ storyline } handleChange={ this.handleChange } />
        <AddRating value={ rating } handleChange={ this.handleChange } />
        <AddGenre value={ genre } handleChange={ this.handleChange } />
        <Button onClick={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
