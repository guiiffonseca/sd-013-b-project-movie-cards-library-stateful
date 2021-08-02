import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Subtitle from './subtitle';
import Imagem from './Imagem';
import StoryLine from './StoryLine';
import RatingInput from './RatingInput';
import Genre from './Genre';
import Button from './button';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
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
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          onChange={ this.handleChange }
        />
        <Imagem
          Imagem={ imagePath }
          onChange={ this.handleChange }
        />
        <StoryLine
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <RatingInput
          rating={ rating }
          onChange={ this.handleChange }
        />
        <Genre
          genre={ genre }
          onChange={ this.handleChange }
        />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
// npm test AddMovie.test.js
