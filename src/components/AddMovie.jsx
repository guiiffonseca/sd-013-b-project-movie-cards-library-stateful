import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import StorylineText from './StorylineText';
import RatingFeedback from './RatingFeedback';
import GenreSelect from './GenreSelect';
import movies from '../data';
import '../AddMovie.css';
import '../SearchBar.css';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
    onClick('oi');
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    };
    onClick(newMovie);
    movies.push(newMovie);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
      genre,
    } = this.state;
    return (
      <section id="add-movie-container">
        <h4 id="add-movie-title">Add a New Movie </h4>
        <form htmlFor="true" data-testid="add-movie-form" id="add-movie-form">
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
            handleChange={ this.handleChange }
          />
          <GenreSelect
            genreValue={ genre }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.onAddMovieClick }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
