// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handle = this.handle.bind(this);
  }

  handle(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="add-input-text">
          Título
          <input
            type="text"
            id="add-input-text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handle }
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="add-input-text-2">
          Subtítulo
          <input
            type="text"
            id="add-input-text-2"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handle }
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="add-input-img">
          Imagem
          <input
            type="text"
            id="add-input-img"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handle }
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="add-textarea">
          Sinopse
          <textarea
            id="add-textarea"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handle }
            name="storyline"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
