import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieGenre from './AddMovieGenre';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieSubtitle from './AddMovieSubTitle';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

    handleChange = ({ target }) => {
      this.setState({
        [target.id]: target.value,
      });
    }

    handleClick(event) {
      event.preventDefault();
      const { onClick } = this.props;

      if (JSON.stringify(this.state) !== JSON.stringify(initialState)) {
        onClick({ ...this.state, bookmarked: false });
        this.setState(initialState);
      }
    }

    render() {
      const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
      return (
        <form data-testid="add-movie-form">
          <AddMovieTitle title={ title } handleChange={ this.handleChange } />
          <AddMovieSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
          <AddMovieImage imagePath={ imagePath } handleChange={ this.handleChange } />
          <AddMovieStoryLine storyline={ storyline } handleChange={ this.handleChange } />
          <AddMovieRating rating={ rating } handleChange={ this.handleChange } />
          <AddMovieGenre genre={ genre } handleChange={ this.handleChange } />
          <button
            data-testid="send-button"
            onClick={ this.handleClick }
            type="submit"
          >
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
