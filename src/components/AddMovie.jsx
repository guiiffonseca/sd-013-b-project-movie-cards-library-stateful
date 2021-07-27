import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            id="titulo"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            name="subtitle"
            id="subtitle"
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
            name="imagePath"
            id="imagePath"
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
