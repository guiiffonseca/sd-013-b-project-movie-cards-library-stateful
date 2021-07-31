import React from 'react';
import PropTypes from 'prop-types';

import Title from './Inputs/Title';
import Subtitle from './Inputs/Subtitle';
import Image from './Inputs/Image';
import StoryLine from './Inputs/StoryLine';
import Rating from './Inputs/Rating';
import Genre from './Inputs/Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      story: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    this.handleMovie = this.handleMovie.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      story: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, story, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title inputValue={ title } handle={ this.handleInput } name="title" />
        <Subtitle inputValue={ subtitle } handle={ this.handleInput } name="subtitle" />
        <Image inputValue={ imagePath } handle={ this.handleInput } name="imagePath" />
        <StoryLine inputValue={ story } handle={ this.handleInput } name="story" />
        <Rating inputValue={ rating } handle={ this.handleInput } name="rating" />
        <Genre inputValue={ genre } handle={ this.handleInput } name="genre" />
        <button type="submit" data-testid="send-button" onClick={ this.handleMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
