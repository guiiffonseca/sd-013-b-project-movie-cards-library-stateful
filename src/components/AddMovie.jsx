import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });

  }

  render() {
    const { rating, title, subtitle, imagePath, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text" name="title" data-testid="title-input" onChange={ this.handleChanges } value={title}/>
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" data-testid="subtitle-input" onChange={ this.handleChanges } value={ subtitle }/>
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" data-testid="image-input" onChange={ this.handleChanges } value={imagePath}/>
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" data-testid="storyline-input" id="" cols="30" rows="10" onChange={ this.handleChanges } value={ storyline }/>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            onChange={ this.handleChanges }
            value={ rating }
            type="number"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="" data-testid="genre-input" onChange={ this.handleChanges } value={ genre }>
            <option data-testid="genre-option" value="action"> Ação </option>
            <option data-testid="genre-option" value="comedy"> Comédia </option>
            <option data-testid="genre-option" value="thriller"> Suspense </option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ () => this.onSubmit() }>
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;
