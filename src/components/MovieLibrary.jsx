import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import AddMovie from './AddMovie';
// import movies from '../data';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: { movies },
  //   };
  // }

  render() {
    // const { movies } = this.props;
    // const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.array.isRequired,
// };

export default MovieLibrary;
