import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyLine: '',
      subtitle: '',
      title: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { genre, imagePath, rating, storyLine, subtitle, title } = this.state;
    const { onClick } = this.props;

    console.log(genre, onClick);

    return (
      <form data-testid="add-movie-form">
        <Input
          id="title"
          labelText="Título"
          onChange={ this.handleChange }
          type="text"
          value={ title }
        />
        <Input
          id="subtitle"
          labelText="Subtítulo"
          onChange={ this.handleChange }
          type="text"
          value={ subtitle }
        />
        <Input
          id="image"
          labelText="Imagem"
          name="imagePath"
          onChange={ this.handleChange }
          type="text"
          value={ imagePath }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyLine"
            id="storyLine"
            defaultValue={ storyLine }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <Input
          id="rating"
          labelText="Avaliação"
          onChange={ this.handleChange }
          type="number"
          value={ rating }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
