import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import TextArea from './TextArea';
// import Select from './select';

export default class AddMovie extends Component {
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
    this.newInput = this.newInput.bind(this);
    this.inputArray = this.inputArray.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange(event, stateName) {
    this.setState({ [stateName]: event.target.value });
  }

  buttonClick(event) {
    event.preventDefault();
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
        labelText: 'Subtítulo',
        type: 'text',
        stateName: 'subtitle',
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
        type: 'number',
        stateName: 'rating',
      },
    ];
  }

  newInput({ name, text, labelText, type, stateName }) {
    return (
      <Input
        name={ `${name}-input` }
        testId={ `${name}-input` }
        inputText={ text }
        labelText={ labelText }
        inputType={ type }
        callback={ (event) => this.handleChange(event, stateName) }
      />
    );
  }

  render() {
    const { storyline, genre } = this.state;
    // const addMovieSelect = [
    //   { value: 'action', content: 'Ação' },
    //   { value: 'comedy', content: 'Comédia' },
    //   { value: 'thriller', content: 'Suspense' },
    // ];
    return (
      <form data-testid="add-movie-form">
        { this.newInput(this.inputArray()[0]) }
        <br />
        { this.newInput(this.inputArray()[1]) }
        <br />
        { this.newInput(this.inputArray()[2]) }
        <br />
        <TextArea
          name="storyline-input"
          testId="storyline-input"
          inputText={ storyline }
          labelText="Sinopse"
          callback={ (event) => this.handleChange(event, 'storyline') }
        />
        <br />
        { this.newInput(this.inputArray()[3]) }
        <br />
        <label data-testid="genre-input-label" htmlFor="add-select">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            id="add-select"
            name="genre"
            onChange={ (event) => this.handleChange(event, 'genre') }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <br />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ (event) => this.buttonClick(event) }
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
