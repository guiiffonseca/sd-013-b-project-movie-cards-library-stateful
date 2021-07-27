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
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={ title }
              id="title-input"
              name="title"
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={ subtitle }
              id="subtitle-input"
              name="subtitle"
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              value={ imagePath }
              id="image-input"
              name="imagePath"
              data-testid="image-input"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
