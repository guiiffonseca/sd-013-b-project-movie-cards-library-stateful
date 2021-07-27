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
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
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
      </form>
    );
  }
}
