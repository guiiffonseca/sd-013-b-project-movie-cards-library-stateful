import React from 'react';
import textInput from './textInput';

export default class AddMovie extends React.Component {
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

  render() {
    const { imagePath, subtitle, title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <textInput
          inputTestId="title-input"
          labelTestId="title-input-label"
          onChange={ this.handleChange }
          text="Título"
          value={ title }
        />

        <textInput
          inputTestId="subtitle-input"
          labelTestId="subtitle-input-label"
          onChange={ this.handleChange }
          text="Subtítulo"
          value={ subtitle }
        />

        <textInput
          inputTestId="image-input"
          labelTestId="image-input-label"
          onChange={ this.handleChange }
          text="Imagem"
          value={ imagePath }
        />


      </form>
    );
  }
}
