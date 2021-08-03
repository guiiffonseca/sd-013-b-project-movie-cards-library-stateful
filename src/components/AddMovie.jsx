import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="movie-title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="movie-title"
            value={ this.title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="movie-subtitle"
            value={ this.subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="movie-image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="movie-image"
            value={ this.imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
