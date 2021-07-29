import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.titleInputCallback = this.titleInputCallback.bind(this);
    this.bookMarkCallback = this.bookMarkCallback.bind(this);
    this.selectedGenreCallback = this.selectedGenreCallback.bind(this);
    this.MovieCallback = this.MovieCallback.bind(this);
    this.myFilter = this.myFilter.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.bookMarkedMovieFilter = this.bookMarkedMovieFilter.bind(this);
  }

  titleInputCallback(event) {
    this.setState({ searchText: event.target.value });
  }

  bookMarkCallback(event) {
    this.setState({
      bookmarkedOnly: event.target.checked });
  }

  selectedGenreCallback(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  MovieCallback({ subtitle, title, imagePath, storyline, rating, genre, bookmarked }) {
    const newMovie = { subtitle, title, imagePath, storyline, rating, genre, bookmarked };
    console.log(newMovie);
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  movieFilter() {
    const { searchText, selectedGenre, movies } = this.state;
    if (selectedGenre !== '') {
      if (searchText !== '') {
        console.log(`todos os filmes
            com o genero ${selectedGenre} e o texto ${searchText}`);
        return movies.filter((movie) => movie.genre === selectedGenre)
          .filter((movie) => (
            movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLowerCase())));
      }
      console.log(`todos os filmes com o genêro ${selectedGenre}`);
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      console.log(`todos os filmes  com o texto ${searchText}`);
      return movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())));
    }
    console.log('todos os filmes');
    return movies;
  }

  bookMarkedMovieFilter() {
    const { searchText, selectedGenre, movies } = this.state;
    if (selectedGenre !== '') {
      if (searchText !== '') {
        console.log(`todos os filmes
        favoritos com o genêro ${selectedGenre} e o texto ${searchText}`);
        return movies.filter((movie) => movie.bookmarked === true)
          .filter((movie) => movie.genre === selectedGenre)
          .filte((movie) => (
            movie.storyline.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.title.toLowerCase().includes(searchText.toLowerCase())));
      }
      console.log(`todos os filmes favoritos com o genêro ${selectedGenre}`);
      return movies.filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      console.log(`todos os filmes favoritos com o texto ${searchText}`);
      return movies.filter((movie) => movie.bookMarked === true)
        .filter((movie) => (
          movie.title.toLowerCase().includes(searchText.toLowerCase())
            || movie.subtitle.toLowerCase().include(searchText.toLowerCase())
            || movie.storyline.toLowerCase().includes(searchText.toLowerCase())));
    }
    console.log('todos os filmes favoritos');
    return movies.filter((movie) => movie.bookmarked === true);
  }

  myFilter() {
    const { searchText, selectedGenre, movies, bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return this.bookMarkedMovieFilter();
    }
    if (!searchText || !selectedGenre) {
      return this.movieFilter();
    }
    if (searchText === '' && selectedGenre === '') {
      return movies;
    }
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const movies = this.myFilter();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.titleInputCallback }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookMarkCallback }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreCallback }
        />
        <AddMovie
          onClick={ this.MovieCallback }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
