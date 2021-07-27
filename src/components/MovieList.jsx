import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-list" className="movie-list">
        <SearchBar
          searchText=""
          onSearchTextChange={ () => { } }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => { } }
          selectedGenre=""
          onSelectedGenreChange={ () => { } }
        />
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        <AddMovie />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
