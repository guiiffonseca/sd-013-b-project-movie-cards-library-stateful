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
    this.handleInput = this.handleInput.bind(this);
    this.inputTexts = this.inputTexts.bind(this);
    this.button = this.button.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  button(event) {
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

  // Devido o problema da quantidade máxima de linhas,  criei essa função para auxiliar no formulário.
  inputTexts(imagePath, title, subtitle) {
    return (
      <>
        <label data-testid="title-input-label" htmlFor="Input-Title">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleInput }
            id="Input-Title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="Input-Subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            id="Input-Subtitle"
            onChange={ this.handleInput }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="Input-Image">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            id="Input-Image"
            onChange={ this.handleInput }
          />
        </label>
      </>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.inputTexts(imagePath, title, subtitle)}
        <label data-testid="storyline-input-label" htmlFor="Input-Storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            id="Input-Storyline"
            onChange={ this.handleInput }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="Input-Number">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            id="Input-Number"
            onChange={ this.handleInput }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="Input-Genre">
          Gênero
          <select
            data-testid="genre-input"
            id="Input-Genre"
            value={ genre }
            name="genre"
            onChange={ this.handleInput }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.button }
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
