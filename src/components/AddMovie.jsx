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
    this.handleChange = this.handleChange.bind(this);
  }

  //  funcao handleChange foi pega de https://pt-br.reactjs.org/docs/forms.html#gatsby-focus-wrapper

  //  handleChange generico, com o [name] ( ao usar os colchetes conseguimos pegar uma variavel e utilizar o valor dentro da variavel pra acessar as propriedades de um objeto)

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /*  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }  */

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="title-input-lab" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input-lab"
            name="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle-input-lab" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input-lab"
            name="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-input-lab" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input-lab"
            name="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline-input-lab" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input-lab"
            name="storyline-input"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating-input-lab" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input-lab"
            name="rating-input"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-lab">
        Gênero
          <select
            id="genre-input-lab"
            name="genre-input"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
        Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
