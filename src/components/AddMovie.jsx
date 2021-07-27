// implement AddMovie component here
import React from 'react';
import AddSinopse from './AddSinopse';
import AddRating from './AddRating';
import AddGenre from './AddGenre';
import AddButton from './AddButton';

class AddMovie extends React.Component {
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
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <AddSinopse storyline={ storyline } handleChange={ this.handleChange } />
        <AddRating rating={ rating } handleChange={ this.handleChange } />
        <AddGenre genre={ genre } handleChange={ this.handleChange } />
        <AddButton onClick={ this.onClick } />
      </form>
    );
  }
}

export default AddMovie;
