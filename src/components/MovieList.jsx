import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, selectedGenre } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((valor) => valor.title.includes(searchText)
          || valor.subtitle.includes(searchText)
          || valor.storyline.includes(searchText))
          .filter((movie) => movie.genre.includes(selectedGenre))
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
