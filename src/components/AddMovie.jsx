import React from 'react';
import PropTypes from 'prop-types';

import AddTitle from './addMovie/AddTitle';
import AddSubtitle from './addMovie/AddSubtitle';
import AddImage from './addMovie/AddImage';
import AddStoryline from './addMovie/AddStoryline';
import AddRating from './addMovie/AddRating';
import AddGenre from './addMovie/AddGenre';

class AddMovie extends React.Component {
  submitMovie(event) {
    console.log(event);
  }

  render() {
    const { movieRating } = this.props;
    return (
      <div className="search-field">
        <form data-testid="add-movie-form">
          <AddTitle />
          <AddSubtitle />
          <AddImage />
          <AddStoryline />
          <AddRating movieRating={ movieRating } />
          <AddGenre />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.submitMovie }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  movieRating: PropTypes.number.isRequired,
};

export default AddMovie;
