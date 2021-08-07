import React from 'react';
import PropTypes from 'prop-types';
import InputCreater from './InputCreater';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // ideia de função para renderizar o input do codigo do Rafael Nery (https://github.com/tryber/sd-013-b-project-movie-cards-library-stateful/pull/67/files)
  renderInput(Key, text) {
    return (
      <InputCreater
        Key={ Key }
        handleChange={ this.handleChange }
        text={ text }
      />);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { this.renderInput(title, 'Título')}
        { this.renderInput(subtitle, 'Subtítulo')}
        { this.renderInput(imagePath, 'Imagem')}
        {/* <InputCreater Key={ title } handleChange={ this.handleChange } text="Título" />
        <InputCreater Key={ subtitle } handleChange={ this.handleChange } text="Subtítulo" />
        <InputCreater Key={ imagePath } handleChange={ this.handleChange } text="Imagem" /> */}
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            value={ storyline }
            onChange={ this.handleChange }
            type="textarea"
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            value={ rating }
            onChange={ this.handleChange }
            type="number"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Avaliação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
