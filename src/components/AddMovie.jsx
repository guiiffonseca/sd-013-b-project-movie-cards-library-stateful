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

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" name="subtitle" id="subtittle" />
        </label>
        <label htmlFor="img">
          Imagem
          <input type="text" name="img" id="img" />
        </label>
        <label htmlFor="storyline">
          {' '}
          Sinopse
          <input type="text" name="storyline" id="storyline" />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="text" name="rating" id="rating" />
        </label>
        <label htmlFor="genre">
          Gênero
          <input type="text" name="genre" id="genre" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
