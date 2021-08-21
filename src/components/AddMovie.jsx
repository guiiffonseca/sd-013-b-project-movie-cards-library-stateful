import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="movie-title">
          Título
          <input
            onChange={ (event) => this.setState({ title: event.target.value }) }
            data-testid="title-input"
            type="text"
            id="movie-title"
            value={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="movie-subtitle">
          Subtítulo
          <input
            onChange={ (event) => this.setState({ subtitle: event.target.value }) }
            data-testid="subtitle-input"
            type="text"
            id="movie-subtitle"
            value={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="movie-image-path">
          Imagem
          <input
            onChange={ (event) => this.setState({ imagePath: event.target.value }) }
            data-testid="image-input"
            type="text"
            id="movie-image-path"
            value={ imagePath }
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
