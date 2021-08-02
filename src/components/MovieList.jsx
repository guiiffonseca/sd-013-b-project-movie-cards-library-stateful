import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.filter((bookmarked) => {
          if (bookmarkedOnly) return bookmarked.bookmarked;
          if (selectedGenre) {
            return bookmarked.genre === selectedGenre;
          }
          return bookmarked.title.includes(searchText)
          || bookmarked.subtitle.includes(searchText)
          || bookmarked.storyline.includes(searchText);
        }).map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
