import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
      subtitle: target.value,
      imagePath: target.value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
