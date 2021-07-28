import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Select from './select';
import TextArea from './TextArea';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };

    this.buttonClick = this.buttonClick.bind(this);
    this.inputArray = this.inputArray.bind(this);
    this.newInput = this.newInput.bind(this);
    this.initialState = this.state;
  }

  handleChange(event, stateName) {
    this.setState({ [stateName]: event.target.value });
  }

  buttonClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState({ ...this.initialState });
  }

  inputArray() {
    const { title, subtitle, imagePath, rating } = this.state;
    return [
      {
        name: 'title',
        text: title,
        labelText: 'Título',
        type: 'text',
        stateName: 'title',
      },
      {
        name: 'subtitle',
        text: subtitle,
        labelText: 'subtítulo',
        type: 'text',
        stateName: 'Subtitle',
      },
      {
        name: 'image',
        text: imagePath,
        labelText: 'Imagem',
        type: 'text',
        stateName: 'imagePath',
      },
      {
        name: 'rating',
        text: rating,
        labelText: 'Avaliação',
        type: 'text',
        stateName: 'rating',
      },
    ];
  }

  newInput({ name, text, labelText, type, stateName }) {
    return (
      <Input
        name={ `${name}-input` }
        textid={ `${name}-input` }
        inputText={ text }
        labelText={ labelText }
        inputType={ type }
        callback={ (event) => this.handleChange(event, stateName) }
      />
    );
  }

  render() {
    const { storyline, genre } = this.state;
    const addmovieSelect = [
      { value: 'action', content: 'Ação' },
      { value: 'comedy', content: 'Comédia' },
      { value: 'thriller', content: 'Suspense' },
    ];
    return (
      <form data-testid="add-movie-form">
        { this.newInput(this.inputArray()[0]) }
        <br />
        { this.newInput(this.inputArray()[1]) }
        <br />
        { this.newInput(this.inputArray())[2] }
        <br />
        <TextArea
          name="storyline-input"
          testid="storyline-input"
          inputText={ storyline }
          labelText="Sinopse"
          callback={ (event) => this.handleChange(event, 'storyline') }
        />
        <br />
        { this.newInput(this.inputArray()[3]) }
        <br />
        <Select
          name="genre-input"
          testid="genre-input"
          optionId="genre-option"
          labelText="Gênero"
          selectedGenre={ genre }
          onSelectedGenreChange={ (event) => this.handleChange(event, 'genre') }
          optionList={ addmovieSelect }
        />
        <br />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.buttonClick(event) }
        >
          Adicionar Filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
