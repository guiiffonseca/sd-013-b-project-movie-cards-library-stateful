import React from 'react';
import PropTypes from 'prop-types';
import InputNew from './InputNew.jsx';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.otherClick = this.otherClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    const name = target.name === 'image' ? 'imagePath' : target.name;
    this.setState({ [name]: value });
  }

  otherClick() {
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

  render() {
    const { subtitle: su, title, imagePath: im, storyLine: st,
      rating, genre } = this.state;
    const { handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <InputNew
          d="Título"
          id="title"
          value={ title }
          callback={ handleChange }
        />
        <InputNew d="Subtítulo" id="subtitle" value={ su } callback={ handleChange } />
        <InputNew d="Imagem" id="image" value={ im } callback={ handleChange } />
        <InputNew d="Sinopse" id="storyline" value={ st } callback={ handleChange } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.otherClick }
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
