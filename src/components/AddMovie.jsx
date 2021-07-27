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

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputChangeHandler(e) {
    console.log((e.target.value));
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitHandler(e) {
    const { onClick } = this.props;
    e.preventDefault();
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

  renderTitleControl() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          onChange={ this.inputChangeHandler }
          value={ title }
          name="title"
          type="text"
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitleControl() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          onChange={ this.inputChangeHandler }
          value={ subtitle }
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImageControl() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          onChange={ this.inputChangeHandler }
          value={ imagePath }
          type="file"
          name="imagePath"
          data-testid="image-input"
        />
      </label>
    );
  }

  render() {
    const { storyline, genre, rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        {this.renderTitleControl()}
        {this.renderSubtitleControl()}
        {this.renderImageControl()}
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            onChange={ this.inputChangeHandler }
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            onChange={ this.inputChangeHandler }
            value={ rating }
            name="rating"
            id="rating"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            onChange={ this.inputChangeHandler }
            value={ genre }
            name="genre"
            type="text"
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={ this.submitHandler } data-testid="send-button">
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
