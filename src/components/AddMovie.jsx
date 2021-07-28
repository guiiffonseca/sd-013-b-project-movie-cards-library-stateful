// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            name="title"
            id="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
            id="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            name="imagePath"
            id="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            id="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
