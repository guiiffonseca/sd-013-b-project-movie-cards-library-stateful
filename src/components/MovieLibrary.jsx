import React from 'react';
// import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   searchText: '',
  //   //   bookmarkedOnly: false,
  //   //   selectedGenre: '',
  //   //   movies: props.movies,
  //   // };
  // }

  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
};

export default MovieLibrary;
