import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import StorylineText from './StorylineText';
import RatingFeedback from './RatingFeedback';
import GenreSelect from './GenreSelect';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      feedback: '',
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddMovieClick = this.onAddMovieClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onAddMovieClick() {
    const { onClick } = this.props;
    onClick();

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      feedback: '',
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      feedback,
      genre,
    } = this.state;

    return (
      <form htmlFor="true" data-testid="add-movie-form">
        <TitleInput
          titleValue={ title }
          handleChange={ this.handleChange }
        />
        <SubtitleInput
          subtitleValue={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePathInput
          imagePathValue={ imagePath }
          handleChange={ this.handleChange }
        />
        <StorylineText
          storylineValue={ storyline }
          handleChange={ this.handleChange }
        />
        <RatingFeedback
          ratingValue={ rating }
          feedbackValue={ feedback }
          handleChange={ this.handleChange }
        />
        <GenreSelect
          genreValue={ genre }
          handleChange={ this.handleChange }
        />
        {/* <ButtonSubmmit onClick={ this.onAddMovieClick } /> */}
        {/* onClick */}
        <button type="button" data-testid="send-button" onClick={ this.onAddMovieClick }>
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
