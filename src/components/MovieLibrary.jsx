import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovies from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.name === 'bookmarkedOnly'
        ? event.target.checked
        : event.target.value,
    });
  }

  filterMovies(moviesArr) {
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    const textFilter = moviesArr.filter((movie) => (
      movie.title.toLowerCase().includes(searchText.toString().toLowerCase()))
        || movie.subtitle.toLowerCase().includes(searchText.toString().toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toString().toLowerCase()));
    if (bookmarkedOnly === true) {
      return textFilter.filter((movie) => (
        movie.genre.includes(selectedGenre))
        && movie.bookmarked === true);
    }
    return textFilter.filter((movie) => movie.genre.includes(selectedGenre));
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovies onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(Object).isRequired,
};
