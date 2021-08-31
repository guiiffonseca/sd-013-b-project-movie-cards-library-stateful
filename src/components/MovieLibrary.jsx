import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.updateMovie = this.updateMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieList: [...props.movies],
    };
  }

  updateMovie(newMovie) {
    this.setState((prevstate) => ({ movieList: [...prevstate.movieList, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onclick={ this.updateMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        subtitle: PropTypes.string,
        title: PropTypes.string,
        imagePath: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        genre: PropTypes.string,
      },
    ),
  ).isRequired,
};
