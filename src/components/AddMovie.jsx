import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMovieTitleInput from './AddMovieTitleInput';
import AddMovieSubtitleInput from './AddMovieSubtitleInput';
import AddMovieImage from './AddMovieImage';
import AddMovieTextArea from './AddMovieTextArea';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

class AddMovie extends Component {
  constructor(props) {
    super(props);

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
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    // Testar com prevState mais tarde
    this.setState(() => {
      const defaultState = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
      return defaultState;
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form action="title" data-testid="add-movie-form">
        <AddMovieTitleInput value={ title } onChange={ this.handleChange } />

        <AddMovieSubtitleInput value={ subtitle } onChange={ this.handleChange } />

        <AddMovieImage value={ imagePath } onChange={ this.handleChange } />

        <AddMovieTextArea value={ storyline } onChange={ this.handleChange } />

        <AddMovieRating value={ rating } onChange={ this.handleChange } />

        <AddMovieGenre value={ genre } onChange={ this.handleChange } />

        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
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
