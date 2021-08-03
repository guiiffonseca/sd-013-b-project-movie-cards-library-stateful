import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImagePath from './AddMovieImagePath';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '', // guarda o subtítulo preenchido no formulário por quem usa a aplicação;
      title: '', // guarda o título preenchido no formulário por quem usa a aplicação;
      imagePath: '', // guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
      storyline: '', // guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
      rating: 0, // guarda a nota de avaliação dada no formulário por quem usa a aplicação;
      genre: 'action', // guarda o gênero do filme selecionado no formulário por quem usa a aplicação.
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { onClick } = this.props;

    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } handleChange={ this.handleChange } />
        <AddMovieSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <AddMovieImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <section className="storyline-form">
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse:
            <textarea
              id="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChange }
            />
          </label>
        </section>
        <section className="rating-form">
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação:
            <input
              type="number"
              id="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange }
            />
          </label>
        </section>
        <section className="genre-form">
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              id="genre"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </section>
        <button
          data-testid="send-button"
          onClick={ onClick }
          type="submit"
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
