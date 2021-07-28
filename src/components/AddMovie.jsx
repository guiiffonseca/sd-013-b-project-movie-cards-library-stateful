// implement AddMovie component here
// precisa ter estado gerenciado
import React, { Component } from 'react';
import LabelInput from './LabelInput';
import LabelInputTxtArea from './LabelInputTxtArea';

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

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelInput
          label="Título"
          id="title-input"
          value={ title }
          onChange=""
        />
        <br />
        <LabelInput
          label="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          onChange=""
        />
        <br />
        <LabelInput
          label="Imagem"
          id="image-input"
          value={ imagePath }
          onChange=""
        />
        <br />
        <LabelInputTxtArea
          label="Sinopse"
          id="storyline-input"
          name="storyline"
          value={ storyLine }
          onChange=""
        />
      </form>
    );
  }
}

export default AddMovie;
