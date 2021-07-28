import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     // movies: { movies },
  //   };
  // }

  render() {
    const { movies } = this.props;
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieLibrary;
