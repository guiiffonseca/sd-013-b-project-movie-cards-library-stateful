// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ (e) => this.setState({ title: e.target.value }) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ (e) => this.setState({ subtitle: e.target.value }) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input type="text" value={ imagePath } data-testid="image-input"
              onChange={ (e) => this.setState({ imagePath: e.target.value }) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea name="" id="" cols="100" rows="20"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ (e) => this.setState({ storyline: e.target.value })}
            ></textarea>
          </label>
        </div>

        <div>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input type="number" name="number" id="number" data-testid="rating-input"
              value= { rating }
              onChange={ (e) => this.setState({ rating: e.target.value})}
            />
          </label>
        </div>
      </form>
    );
  }
}
