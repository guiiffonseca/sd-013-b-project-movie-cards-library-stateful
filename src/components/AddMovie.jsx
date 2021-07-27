import React from 'react';
import textInput from './textInput';
import textAreaInput from './textAreaInput';
import numberInput from './numberInput';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
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
        <textAreaInput
          inputTestId="storyline-input"
          labelTestId="storyline-input-label"
          onChange={ this.handleChange }
          text="Sinopse"
          value={ storyline }
        />
        <numberInput
          inputTestId="rating-input"
          labelTestId="rating-input-label"
          onChange={ this.handleChange }
          text="Avaliação"
          value={ rating }
        />
        <selectInput
          inputTestId="genre-input"
          labelTestId="genre-input-label"
          onChange={ this.handleChange }
          optionTestId="genre-option"
          text="Gênero"
          value={ genre }
        />
      </form>
    );
  }
}
