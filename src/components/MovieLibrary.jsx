import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  // dica do Matheusao de colocar a props como parametro
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.updateState = this.updateState.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filterBookmarked = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies));
    const filterSearchText = filterBookmarked
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    const filterGenre = filterSearchText
      .filter((movie) => (selectedGenre === '' ? movies : movie.genre === selectedGenre));
    return filterGenre;
  }
  // includes - metodo ensinado na aula ao vivo 12.1

  updateState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addMovie(state) {
    // console.log(state);
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateState }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};
