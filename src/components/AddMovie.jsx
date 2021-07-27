import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title-input-movie" data-testid="title-input-label">
            Título
            <input
              name="title"
              id="title-input-movie"
              type="text"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="subtitle-input-movie" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              id="subtitle-input-movie"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>
          <label htmlFor="image-input-movie" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              id="image-input-movie"
              type="text"
              value={ imagePath }
              onChange={ this.handleChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="textarea-input-movie" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              id="textarea-input-movie"
              cols="30"
              rows="10"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
