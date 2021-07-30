// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  handleRececeState = (evento) => {
    console.log(evento);
  }

  render() {
    const { movies } = this.props;
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

MovieLibrary.propTypes = {
  movies: PropTypes.string,
};

MovieLibrary.defaultProps = {
  movies: '',
};

export default MovieLibrary;
