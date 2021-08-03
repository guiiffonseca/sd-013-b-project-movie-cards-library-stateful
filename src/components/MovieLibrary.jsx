import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // console.log(movies);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          // onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          // onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          // onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />

      </div>

    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
