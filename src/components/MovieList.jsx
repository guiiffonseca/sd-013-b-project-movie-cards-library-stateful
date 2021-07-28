import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { data.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
