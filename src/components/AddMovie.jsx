// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleData = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;

    this.setState(({
      [name]: value,
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input type="text" name="title" id="title" value={ title } data-testid="title-input" onChange={ this.handleData } />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" id="subtittle" data-testid="subtitle-input" value={ subtitle } onChange={ this.handleData } />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" id="imagePath" data-testid="image-input" value={ imagePath } onChange={ this.handleData } />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" id="storyline" data-testid="storyline-input" value={ storyline } onChange={ this.handleData } cols="30" rows="10" />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="text" name="rating" id="rating" value={ rating } onChange={ this.handleData } />
        </label>
        <label htmlFor="genre">
          Gênero
          <input type="text" name="genre" id="genre" value={ genre } onChange={ this.handleData } />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
