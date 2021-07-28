// implement AddMovie component here
// precisa ter estado gerenciado
import React, { Component } from 'react';
import LabelInput from './LabelInput';
import LabelInputTxtArea from './LabelInputTxtArea';
import SelectGenre from './SelectGenre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelInput
          label="Título"
          id="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
        <br />
        <LabelInput
          label="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <br />
        <LabelInput
          label="Imagem"
          id="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <br />
        <LabelInputTxtArea
          label="Sinopse"
          id="storyline-input"
          name="storyline"
          value={ storyLine }
          onChange={ this.handleChange }
        />
        <LabelInput
          label="Avaliação"
          type="number"
          id="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
        <SelectGenre
          label="Gênero"
          id="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
