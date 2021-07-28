import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GenreInput from './AddMovieComponents/GenreInput';
import ImageInput from './AddMovieComponents/ImageInput';
import RatingInput from './AddMovieComponents/RatingInput';
import Storyline from './AddMovieComponents/Storyline';
import SubtitleInput from './AddMovieComponents/SubtitleInput';
import TitleInput from './AddMovieComponents/TitleInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { onClick } = this.props;
    onClick();
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
    const { rating, title, subtitle, imagePath, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput onChange={ this.handleChanges } value={ title } />
        <SubtitleInput onChange={ this.handleChanges } value={ subtitle } />
        <ImageInput onChange={ this.handleChanges } value={ imagePath } />
        <Storyline onChange={ this.handleChanges } value={ storyline } />
        <RatingInput onChange={ this.handleChanges } value={ `${rating}` } />
        <GenreInput onChange={ this.handleChanges } value={ genre } />
        <button type="button" data-testid="send-button" onClick={ () => this.onSubmit() }>
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
