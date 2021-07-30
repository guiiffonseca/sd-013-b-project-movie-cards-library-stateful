import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';
import SearchBar from './SearchBar';
/* import PropTypes from 'prop-types'; */

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <h2>My Movie Library</h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

/* MovieLibrary.propTypes = {
}
 */
export default MovieLibrary;
