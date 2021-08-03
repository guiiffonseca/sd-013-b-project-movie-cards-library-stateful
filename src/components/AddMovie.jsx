import React from 'react';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log('1');
  }

  render() {
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          text="Título"
          type="title"
          value={ title }
          onChange={ this.onInputChange }
        />
        <TextInput
          text="Subtítulo"
          type="subtitle"
          value={ subtitle }
          onChange={ this.onInputChange }
        />
        <TextInput
          text="Imagem"
          type="image"
          value={ imagePath }
          onChange={ this.onInputChange }
        />
        <TextAreaInput
          text="Sinopse"
          value={ storyline }
          onChange={ this.onInputChange }
        />
        <NumberInput
          text="Avaliação"
          value={ rating }
          onChange={ this.onInputChange }
        />
        <SelectInput
          text="Gênero"
          value={ genre }
          onChange={ this.onInputChange }
        />
      </form>
    );
  }
}