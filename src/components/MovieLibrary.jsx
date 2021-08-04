// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
  }

onSearchTextChange = (event) => {
  this.setState({
    searchText: event.target.value,
  });
  const { movies } = this.props;
  this.setState({ movies: movies.filter((movie) => movie
    .title.includes(event.target.value)
    || movie.subtitle.includes(event.target.value)
    || movie.storyline.includes(event.target.value)) });
}

  onBookmarkedChange = (e) => {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const bolleanTrue = movies.filter(({ bookmarked }) => (bookmarked));
    if (bookmarkedOnly) {
      this.setState({
        bookmarkedOnly: e.target.checked,
        movies: bolleanTrue });
    } else {
      this.setState({
        bookmarkedOnly: e.target.checked,
        movies,
      });
    }
  }

  onSelectedGenreChange = (e) => {
    const { movies } = this.props;
    const { selectedGenre } = this.state;
    if (e.target.value === '') {
      this.setState({
        selectedGenre: e.target.value,
        movies,
      });
    } else {
      this.setState({
        selectedGenre: e.target.value,
        movies: movies.filter(({ genre }) => genre.includes(selectedGenre)),
      });
    }
  }

  newMovie = (movie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.newMovie } />
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
