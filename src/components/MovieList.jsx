import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    let { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    movies = movies
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly) {
      movies = movies
        .filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      movies = movies
        .filter((movie) => movie.genre === selectedGenre);
    }
    return (
      <div>

        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};
// O
export default MovieList;
