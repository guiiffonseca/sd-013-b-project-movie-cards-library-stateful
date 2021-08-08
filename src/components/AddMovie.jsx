import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import SendButton from './SendButton';

class AddMovie extends Component {
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

  // Consultei: https://pt-br.reactjs.org/docs/handling-events.html
  handleChange({ target }) {
    console.log(this.props);
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput
            title={ title }
            handleChange={ this.handleChange }
          />
          <SubtitleInput
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />
          <ImagePathInput
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <StorylineInput
            storyline={ storyline }
            handleChange={ this.handleChange }
          />
          <RatingInput
            rating={ rating }
            handleChange={ this.handleChange }
          />
          <GenreInput
            genre={ genre }
            handleChange={ this.handleChange }
          />
          <SendButton
            handleClick={ this.handleClick }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
