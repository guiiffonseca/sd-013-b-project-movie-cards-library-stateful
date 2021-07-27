import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleTitleClick() {
    const { callback } = this.props;
    const { title } = this.state;
    callback(title);
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleTitleChange }
          />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="image-input"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleTitleChange }
          />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleTitleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
