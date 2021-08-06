import React from 'react';
import PropTypes from 'prop-types';
import Labels from './Labels';
import InComp from './InputComponent';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.addMovie = this.addMovie.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { state, handleChange } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    return (
      <form data-testid="add-movie-form">
        <Labels id="title-input" text="Título" />
        <InComp name="title" value={ title } id="title" on={ handleChange } />
        <Labels id="subtitle-input" text="Subtítulo" />
        <InComp name="subtitle" value={ subtitle } id="subtitle" on={ handleChange } />
        <Labels id="image-input" text="Imagem" />
        <InComp name="imagePath" value={ imagePath } id="image" on={ handleChange } />
        <Labels id="storyline-input" text="Sinopse" />
        <InComp name="storyline" value={ storyline } id="storyline" on={ handleChange } />
        <Labels id="rating-input" text="Avaliação" />
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Labels id="genre-input" text="Gênero" />
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovie }
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

export default AddMovie;
