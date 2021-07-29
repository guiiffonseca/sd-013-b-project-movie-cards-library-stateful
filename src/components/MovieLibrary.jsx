import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleInputs({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    const filteredMovie = movies
      .filter(({ title, subtitle, storyline }) => title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))
      .filter(({ genre }) => genre.includes(selectedGenre))
      .filter(({ bookmarked }) => (bookmarkedOnly === false
        ? movies
        : bookmarked));
    return filteredMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInputs }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleInputs }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleInputs }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie />
        {/* <div>{console.log(this.filterMovies())}</div> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
