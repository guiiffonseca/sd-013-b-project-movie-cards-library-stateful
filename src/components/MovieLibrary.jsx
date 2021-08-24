import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkedOnly: false,
      selectedGenre: '',
      searchText: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.moviesFiltered = this.moviesFiltered.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
  }

  handleAddCard(newMovie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  onSearchTextChange(event) {
    event.preventDefault();
    this.setState({
      searchText: event.target.value,
    });
  }

  onSelectedGenreChange(event) {
    event.preventDefault();
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  onBookmarkedChange(event) {
    event.preventDefault();
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  moviesFiltered() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    if (searchText) {
      return movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    } if (selectedGenre) {
      return movies.filter((movie) => movie.genre.includes(selectedGenre));
    } if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    } return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.moviesFiltered() } />
        <AddMovie onClick={ this.handleAddCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
