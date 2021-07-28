import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
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
    return <div>
      <SearchBar
        searchText = { searchText }
        bookmarkedOnly = { bookmarkedOnly }
        selectedGenre = { selectedGenre }
      />
      <AddMovie />
      <MovieList movies={ movies }/>
    </div>
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
