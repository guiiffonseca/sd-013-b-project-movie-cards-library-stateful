import React from 'react';
import PropTypes from 'prop-types';

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
    this.onNewImagePath = this.onNewImagePath.bind(this);
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

  onNewImagePath(event) {
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
        <label htmlFor="newTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.onNewTitle }
            data-testid="title-input"
            id="newTitle"
          />
        </label>
        <label htmlFor="newSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ this.onNewSubTitle }
            data-testid="subtitle-input"
            id="newSubtitle"
          />
        </label>
        <label htmlFor="newImagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ this.onNewImagePath }
            data-testid="image-input"
            id="newImagePath"
          />
        </label>
        <label htmlFor="newStoryline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            value={ storyline }
            onChange={ this.onNewStoryline }
            data-testid="storyline-input"
            id="newStoryline"
          />
        </label>
        <label htmlFor="newRating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            onChange={ this.onNewRating }
            data-testid="rating-input"
            id="newRating"
          />
        </label>
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
      </form>
    );
  }
}

AddMovie.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default AddMovie;
