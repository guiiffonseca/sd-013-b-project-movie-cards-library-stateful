import React from 'react';
import ButtonInput from './ButtonInput';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';

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
        <TextInput
          inputTestId="title-input"
          labelTestId="title-input-label"
          onChange={ this.handleChange }
          text="Título"
          value={ title }
        />
        <TextInput
          inputTestId="subtitle-input"
          labelTestId="subtitle-input-label"
          onChange={ this.handleChange }
          text="Subtítulo"
          value={ subtitle }
        />
        <TextInput
          inputTestId="image-input"
          labelTestId="image-input-label"
          onChange={ this.handleChange }
          text="Imagem"
          value={ imagePath }
        />
        <TextAreaInput
          inputTestId="storyline-input"
          labelTestId="storyline-input-label"
          onChange={ this.handleChange }
          text="Sinopse"
          value={ storyline }
        />
        <NumberInput
          inputTestId="rating-input"
          labelTestId="rating-input-label"
          onChange={ this.handleChange }
          text="Avaliação"
          value={ rating }
        />
        <SelectInput
          inputTestId="genre-input"
          labelTestId="genre-input-label"
          onChange={ this.handleChange }
          optionTestId="genre-option"
          text="Gênero"
          value={ genre }
        />
        <ButtonInput
          inputTestId="send-button"
          text="Adicionar Filme"
        />
      </form>
    );
  }
}
