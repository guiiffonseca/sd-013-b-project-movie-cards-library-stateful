import React, { Component } from 'react';

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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-lab" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input-lab"
            value={ title }
            data-testid="title-input"
            //  onChange=""
          />
        </label>
        <label htmlFor="subtitle-input-lab" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input-lab"
            value={ subtitle }
            data-testid="subtitle-input"
            //  onChange=""
          />
        </label>
        <label htmlFor="image-input-lab" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input-lab"
            value={ imagePath }
            data-testid="image-input"
            //  onChange=""
          />
        </label>
        <label htmlFor="storyline-input-lab" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input-lab"
            value={ storyline }
            data-testid="storyline-input"
            //  onChange=""
          />
        </label>
        <label htmlFor="rating-input-lab" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input-lab"
            value={ rating }
            data-testid="rating-input"
            //  onChange=""
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-lab">
        Gênero
          <select
            id="genre-input-lab"
            value={ genre }
            //  onChange=
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
      <button type="submit" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </section>
    );
  }
}

export default AddMovie;
