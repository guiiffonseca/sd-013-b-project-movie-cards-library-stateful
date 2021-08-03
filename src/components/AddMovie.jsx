import React from 'react';
import PropTypes from 'prop-types';
import ButtonInput from './ButtonInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

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
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          text="Título"
          name="title"
          value={ title }
          onChange={ this.onInputChange }
        />
        <TextInput
          text="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.onInputChange }
        />
        <TextInput
          text="Imagem"
          name="image"
          value={ imagePath }
          onChange={ this.onInputChange }
        />
        <TextAreaInput
          text="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.onInputChange }
        />
        <NumberInput
          text="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.onInputChange }
        />
        <SelectInput
          text="Gênero"
          name="genre"
          value={ genre }
          onChange={ this.onInputChange }
        />
        <ButtonInput
          text="Adicionar filme"
          name="button"
          onClick={ onClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
