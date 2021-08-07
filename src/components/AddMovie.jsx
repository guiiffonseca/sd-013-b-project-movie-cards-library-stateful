import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImagePath from './AddMovieImagePath';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

const defaultState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;

    if (JSON.stringify(this.state) !== JSON.stringify(defaultState)) {
      onClick({ ...this.state, bookmarked: false });
      this.setState(defaultState);
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
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
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } handleChange={ this.handleChange } />
        <AddMovieSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <AddMovieImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
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
