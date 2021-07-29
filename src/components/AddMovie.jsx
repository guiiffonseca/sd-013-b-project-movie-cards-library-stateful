import React from 'react';
// import PropTypes from 'prop-types';
import Title from './title';
import Subtitle from './subtitle';
import Imagem from './Imagem';
import StoryLine from './StoryLine';
import RatingInput from './RatingInput';
import Genre from './Genre';

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          value={ title }
          onChange={ this.handleChange }
        />
        <Subtitle
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Imagem
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <StoryLine
          value={ storyline }
          onChange={ this.handleChange }
        />
        <RatingInput
          rating={ rating }
          onChange={ this.handleChange }
        />
        <Genre
          value={ genre }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
// npm test AddMovie.test.js
