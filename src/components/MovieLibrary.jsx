import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies: moviesData } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviesData,
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    }, this.FilterMovies);
  };

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, this.FilterMovies);
  };

  onSelectedGenreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    }, this.FilterMovies);
  };

  filterFavorite = (movieFiltered, bookmarkedOnly) => {
    if (bookmarkedOnly === true) {
      movieFiltered = movieFiltered.filter((movie) => movie.bookmarked === true);
      return movieFiltered;
    } if (bookmarkedOnly === false) {
      return movieFiltered;
    }
  };

  filterGenre = (movieFiltered, selectedGenre) => {
    if (selectedGenre === '') {
      return movieFiltered;
    } if (selectedGenre !== '') {
      movieFiltered = movieFiltered.filter((movie) => movie.genre === selectedGenre);
      return movieFiltered;
    }
  };

  FilterText = (movieFiltered, searchText) => {
    if (searchText === '') {
      return movieFiltered;
    } if (searchText !== '') {
      movieFiltered = movieFiltered.filter((movie) => (
        movie.title.toUpperCase().includes(searchText.toUpperCase())
        || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
        || movie.storyline.toUpperCase().includes(searchText.toUpperCase())
      ));
      return movieFiltered;
    }
  };

  FilterMovies = () => {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    const { movies: movieReceived } = this.props;
    let movieFiltered = [...movieReceived];
    movieFiltered = this.filterFavorite(movieFiltered, bookmarkedOnly); // filtra favoritos
    movieFiltered = this.filterGenre(movieFiltered, selectedGenre); // filtra genero
    movieFiltered = this.FilterText(movieFiltered, searchText); // filtra text pelo titulo,subtitulo e storyline
    this.setState({
      movies: movieFiltered,
    }); // coloca o valor filtrado no estado
  };

  addNewMovie = (addState) => {
    const { title, subtitle, storyline, rating, imagePath, genre } = addState;
    const newMovieToData = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };
    this.setState((_, props) => ({
      movies: [...props.movies, newMovieToData],
    }));
  };

  render() {
    const {
      movies,
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
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
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.addNewMovie }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
