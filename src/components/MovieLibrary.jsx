import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
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

    this.handleOnMovieChange = this.handleOnMovieChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleUpdateMovies = this.handleUpdateMovies.bind(this);
  }

  handleOnMovieChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleOnClick(movie) {
    const { movies } = this.state;
    const filteredList = [...movies, movie];
    this.setState({ movies: filteredList });
  }

  //  como estava com dificuldade para encontrar o erro, acabava nas mentorias coletivas observando
  //  o que outros colegas estavam fazendo e fui modificando meu codigo a ver se conseguia passar nos requisitos.
  //  esse abaixo nem me lembro quem estava compartiçhando, mas segui o mesmo raciocinio.

  handleUpdateMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredMovie = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies))
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    return filteredMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleOnMovieChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleOnMovieChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnMovieChange }
        />
        <MovieList movies={ this.handleUpdateMovies() } />
        <AddMovie onClick={ this.handleOnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
