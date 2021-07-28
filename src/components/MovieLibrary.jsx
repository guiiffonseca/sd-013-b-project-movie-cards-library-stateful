import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const {
      movies,
    } = this.props;
    return (
      <div>{ movies[0].title }</div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(PropTypes.movies)
    .isRequired,
};

export default MovieLibrary;
