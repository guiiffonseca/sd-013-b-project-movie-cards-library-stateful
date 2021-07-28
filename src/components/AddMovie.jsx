import React from 'react';
import PropTypes from 'prop-types';
import DefaultTextInput from './DefaultTextInput';
import DefaultTextAreaInput from './DefaultTextAreaInput';
import DefaultNumberInput from './DefaultNumberInput';
import DefaultSelectInput from './DefaultSelectInput';
import DefaultButton from './DefaultButton';

export default class AddMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      bookmarked: false,
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      bookmarked: false,
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <DefaultTextInput
          testName="title"
          labelText="Título"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <DefaultTextInput
          testName="subtitle"
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <DefaultTextInput
          testName="image"
          labelText="Imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <DefaultTextAreaInput
          value={ storyline }
          name="storyline"
          testName="storyline"
          labelText="Sinopse"
          handleChange={ this.handleChange }
        />
        <DefaultNumberInput
          value={ rating }
          name="rating"
          labelText="Avaliação"
          handleChange={ this.handleChange }
        />
        <DefaultSelectInput
          handleChange={ this.handleChange }
          name="genre"
          labelText="Gênero"
          value={ genre }
        />
        <DefaultButton labelText="Adicionar filme" onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovies.propTypes = {
  onClick: PropTypes.func.isRequired,
};
