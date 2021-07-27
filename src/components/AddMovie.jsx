// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'Action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            name="title"
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange} 
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            id="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyLine">
          Sinopse
          <input
            name="storyLine"
            id="storyLine"
            data-testid="storyline-input"
            value={ storyLine }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            data-testid="rating-input"
            value={ rating }
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
