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

    return (
      <form data-testid="add-movie-form">
        { console.log(onClick, genre, rating, storyLine) }
        <Input
          id="title"
          label="Título"
          name="title"
          onChange={ this.handleChange }
          testidInput="title-input"
          testidLabel="title-input-label"
          type="text"
          value={ title }
        />
        <Input
          id="subtitle"
          label="Subtítulo"
          name="subtitle"
          onChange={ this.handleChange }
          testidInput="subtitle-input"
          testidLabel="subtitle-input-label"
          type="text"
          value={ subtitle }
        />
        <Input
          id="imagePath"
          label="Imagem"
          name="imagePath"
          onChange={ this.handleChange }
          testidInput="image-input"
          testidLabel="image-input-label"
          type="text"
          value={ imagePath }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
