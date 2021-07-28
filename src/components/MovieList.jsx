import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="movie-list">
        {props.movies.map((movie) => (<MovieCard
          movie={ movie }
          key={ movie.title }
          data-testid="movie-card"
        />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
