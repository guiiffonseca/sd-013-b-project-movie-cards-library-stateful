import React from 'react';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        {/* {movies.map((movie) => <MovieCard key={ movie.title }movie={ movie } />)} */}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };

export default MovieList;
