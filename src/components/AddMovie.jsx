// implement AddMovie component here
import React, { Component } from 'react';
import InputText from './InputText';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubTitleChange = this.handleSubTitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Reseta o estado de <AddMovie />, voltando para o inicial,
  // onforme mencionado anteriormente.
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubTitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleTextareaChange(event) {
    this.setState({ storyline: event.target.value });
  }

  handleRating(event) {
    this.setState({ rating: event.target.value });
  }

  handleGenre(event) {
    this.setState({ genre: event.target.value });
  }

  reset() {
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

    return (
      <form data-testid="add-movie-form" id="usrform">
        <InputText value={ title } handleTitleChange={ this.handleTitleChange } />
        <InputSubtitle
          value={ subtitle }
          handleSubTitleChange={ this.handleSubTitleChange }
        />
        <InputImage
          value={ imagePath }
          handleImageChange={ this.handleImageChange }
        />
        <Sinopse value={ storyline } handleTextareaChange={ this.handleTextareaChange } />
        <Avaliacao value={ rating } handleRating={ this.handleRating } />
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select
            name=""
            value={ genre }
            onChange={ this.handleGenre }
            data-testid="genre-input"
            id="genero"
            form="usrform"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.reset }
          form="usrform"
          value="Submit"
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
