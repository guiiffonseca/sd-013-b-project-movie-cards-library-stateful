import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor({ movies }) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  componentDidUpdate() {
    console.log('oi');
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}
