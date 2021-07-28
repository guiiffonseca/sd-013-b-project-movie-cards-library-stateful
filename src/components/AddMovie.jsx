// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieGenre from './AddMovieGenre';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieTitle from './AddMovieTitle';
import AddMovieButton from './AddMovieButton';

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

    this.changeHandler = this.changeHandler.bind(this);
    this.ratingChangeHandler = this.ratingChangeHandler.bind(this);
    this.restoreState = this.restoreState.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  ratingChangeHandler(event) {
    this.setState({
      rating: Number(event.target.value),
    });
  }

  restoreState() {
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
      <form data-testid="add-movie-form">
        <AddMovieTitle
          title={ title }
          changeHandler={ this.changeHandler }
        />
        <AddMovieSubtitle
          subtitle={ subtitle }
          changeHandler={ this.changeHandler }
        />
        <AddMovieImage
          imagePath={ imagePath }
          changeHandler={ this.changeHandler }
        />
        <AddMovieStoryline
          storyline={ storyline }
          changeHandler={ this.changeHandler }
        />
        <AddMovieRating
          rating={ rating }
          changeHandler={ this.ratingChangeHandler }
        />
        <AddMovieGenre
          genre={ genre }
          changeHandler={ this.changeHandler }
        />
        <AddMovieButton onClick={ this.restoreState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
