// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('test');
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library. </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieLibrary;
