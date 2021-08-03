import React from 'react';
import PropTypes from 'prop-types';
import Input from './CreateInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.onNewTitle = this.onNewTitle.bind(this);
    this.onNewSubTitle = this.onNewSubTitle.bind(this);
    this.onPath = this.onPath.bind(this);
    this.onNewStoryline = this.onNewStoryline.bind(this);
    this.onNewRating = this.onNewRating.bind(this);
    this.onNewGenre = this.onNewGenre.bind(this);
  }

  onNewTitle(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  onNewSubTitle(event) {
    console.log(event.target.value);
    this.setState({ subtitle: event.target.value });
  }

  onPath(event) {
    console.log(event.target.value);
    this.setState({ imagePath: event.target.value });
  }

  onNewStoryline(event) {
    console.log(event.target.value);
    this.setState({ storyline: event.target.value });
  }

  onNewRating(event) {
    console.log(event.target.value);
    this.setState({ rating: event.target.value });
  }

  onNewGenre(event) {
    console.log(event.target.value);
    this.setState({ genre: event.target.value });
  }

  render() {
    const { callBack } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
            type="text"
            name="title"
          />
        </label>
        <Input text="Título" name="title" value={ title } onChange={ this.onNewTitle } />
        <Input
          text="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.onNewSubTitle }
        />
        <Input text="Imagem" name="image" value={ imagePath } onChange={ this.onPath } />
        <Input
          text="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.onNewStoryline }
        />
        <Input
          text="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.onNewRating }
          type="number"
        />
        <label htmlFor="newGenre" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            onChange={ this.onNewGenre }
            data-testid="genre-input"
            id="newGenre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        { console.log(callBack) }
        <button
          type="reset"
          data-testid="send-button"
          onClick={ console.log(callBack) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default AddMovie;
