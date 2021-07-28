import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.searching = this.searching.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.showingBookmarked = this.showingBookmarked.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    const inputValue = event.target.value;
    this.setState({ searchText: inputValue });
  }

  onBookmarkedChange(event) {
    const state = event.target.checked;
    if (state) {
      this.showingBookmarked();
    } else {
      const { movies } = this.props;
      this.setState({ movies });
    }
    this.setState({ bookmarkedOnly: state });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    const inputedGenre = event.target.value;
    if (inputedGenre === '') {
      this.setState({ movies });
    } else {
      const genreMovies = movies.filter(({ genre }) => genre === inputedGenre);
      this.setState({ movies: genreMovies, selectedGenre: inputedGenre });
    }
  }

  showingBookmarked() {
    const { movies } = this.props;
    const trues = movies.filter((movie) => movie.bookmarked);
    this.setState({ movies: trues });
  }

  searching() {
    const { searchText, movies } = this.state;
    return movies.filter(({ title, subtitle, storyline }) => (
      title.toLowerCase().includes([searchText.toLowerCase()])
    || subtitle.toLowerCase().includes([searchText.toLowerCase()])
    || storyline.toLowerCase().includes([searchText.toLowerCase()])));
  }

  submitMovie(obj) {
    const { movies } = this.state;
    const movieList = [...movies, obj];
    this.setState({ movies: movieList });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ searchText === '' ? movies : this.searching() } />
        <AddMovie onClick={ this.submitMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
