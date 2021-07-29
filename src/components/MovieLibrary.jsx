// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  handleRececeState = (evento) => {
    console.log(evento);
  }

  render() {
    return (
      <div>
        <h2>My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleRececeState } />
      </div>
    );
  }
}

export default MovieLibrary;
