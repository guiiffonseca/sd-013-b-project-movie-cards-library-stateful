import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((movie) => ((bookmarkedOnly) ? movie.bookmarked === true : movie))
          .filter((movie) => ((selectedGenre !== '')
            ? movie.genre === selectedGenre : movie))
          .filter((movie) => ((searchText !== '')
            ? movie.title.toLowerCase().includes(searchText.toLowerCase())
              || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
              || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
            : movie
          ))
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
