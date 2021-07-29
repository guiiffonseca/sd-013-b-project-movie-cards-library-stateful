// implement MovieLibrary component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const objState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};
class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = objState;
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
