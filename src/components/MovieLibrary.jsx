// implement MovieLibrary component here
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: 
    };
  }
  render() {
    return (
      <div>
        <AddMovie />
        <SearchBar />
      </div>
    );
  }
}
