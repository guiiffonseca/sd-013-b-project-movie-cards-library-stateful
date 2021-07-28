import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input type="text" value={ title } name="title" data-testid="title-input" onChange={ this.handleChange } />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" value={ subtitle } name="subtitle" data-testid="subtitle-input" onChange={ this.handleChange } />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input type="text" value={ imagePath } name="imagePath" data-testid="image-input" onChange={ this.handleChange } />
          </label>
          <label htmlFor="image-input" data-testid="storyline-input-label">
            Sinopse
            <textarea value={ storyline } name="storyline" data-testid="storyline-input" onChange={ this.handleChange }> </textarea>
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input type="number" value={ rating } name="rating" data-testid="rating-input" onChange={ this.handleChange } />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select value={ genre } name="genre" data-testid="genre-input" onChange={ this.handleChange }>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={ onClick(this.state) }>Adicionar filme</button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
