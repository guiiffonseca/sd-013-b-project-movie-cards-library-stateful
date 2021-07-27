import React from 'react';
import DefaultTextInput from './DefaultTextInput';

export default class AddMovies extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, rating, genre } = this.state;
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
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            onChange={ this.handleChange }
            data-testid="storyline-input"
            name="storyline"
            id=""
            cols="30"
            rows="10"
          />
        </label>
      </form>
    );
  }
}
