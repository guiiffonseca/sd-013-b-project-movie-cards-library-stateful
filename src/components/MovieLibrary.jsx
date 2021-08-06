// implement MovieLibrary component here

import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onClick = this.onClick.bind(this);
    this.state = {
      movies,
    };
  }

  onClick(novo) {
    console.log(novo);
    this.setState((antes) => ({
      movies: [...antes.movies, novo],
    }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
