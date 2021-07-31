// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> The amazing movie library </h2>
        <MovieList />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}
