import React from 'react';
import PropTypes from 'prop-types';

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

  renderInput(Key, text) {
    return (
      <label htmlFor={ `${Key}-input` } data-testid={ `${Key}-input-label` }>
        { text }
        <input
          name={ `${Key}` }
          value={ Key }
          onChange={ this.handleChange }
          type="text"
          data-testid={ `${Key}-input` }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ this.handleChange }
            type="text"
            data-testid="title-input"
          />
        </label>
        { this.renderInput(subtitle, 'Subtítulo')}
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
