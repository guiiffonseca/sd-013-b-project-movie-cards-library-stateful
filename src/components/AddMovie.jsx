import React from 'react';
import CompData from './CompData';
import CompGenre from './CompGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  onClick(event) {
    event.preventDefault();
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <fieldset>
            <legend>== Atualizar biblioteca ==</legend>
            <label htmlFor="title" data-testid="title-input-label">
              Título
              <input
                id="title"
                name="title"
                data-testid="title-input"
                type="text"
                value={ title }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">
              Subtítulo
              <input
                id="subtitle"
                name="subtitle"
                data-testid="subtitle-input"
                type="text"
                value={ subtitle }
                onChange={ this.handleChange }
              />
            </label>
            <CompData
              imagePath={ imagePath }
              storyline={ storyline }
              rating={ parseFloat(rating) }
              handleChange={ this.handleChange }
            />
            <CompGenre genre={ genre } handleChange={ this.handleChange } />
            <button
              type="submit"
              data-testid="send-button"
              onClick={ this.onClick }
            >
              Adicionar filme
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddMovie;
