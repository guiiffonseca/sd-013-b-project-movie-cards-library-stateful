import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline/* , rating, genre */ } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="titulo"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="sinopse"
            id="sinopse"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
