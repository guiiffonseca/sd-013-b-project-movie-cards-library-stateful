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

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleCheckChange() {
    this.setState((estadoAnterior) => ({
      bookmarkedOnly: !estadoAnterior.bookmarkedOnly,
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filteredMovies = movies
      .filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));

    let mov = filteredMovies;

    function getBookmarked() {
      if (bookmarkedOnly === true) {
        filteredMovies = mov.filter(({ bookmarked }) => bookmarked === true);
        mov = filteredMovies;
      }
    }

    function getGenre() {
      if (selectedGenre !== '') {
        filteredMovies = mov.filter(({ genre }) => genre === selectedGenre);
      }
    }

    function filters() {
      getBookmarked();
      getGenre();
      return filteredMovies;
    }

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheckChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie />

        <MovieList
          movies={ filters() }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
