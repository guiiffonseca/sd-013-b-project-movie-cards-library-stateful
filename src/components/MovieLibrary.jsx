import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movieList: [],
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  searchMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const searchByText = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    const searchByBookmark = movies.filter((movie) => movie.bookmarked === true);
    const searchByGenre = movies.filter((movie) => movie.genre === selectedGenre);

    if (searchText !== '') {
      return searchByText;
    }
    if (bookmarkedOnly === true) {
      return searchByBookmark;
    }
    if (selectedGenre !== '') {
      return searchByGenre;
    }
    return movies;
  }

  updateMovie() {
    const { movies } = this.props;
    console.log(movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.searchMovies() } />
        <AddMovie onClick={ this.updateMovie() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        subtitle: PropTypes.string,
        title: PropTypes.string,
        imagePath: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        genre: PropTypes.string,
      },
    ),
  ).isRequired,
};

export default MovieLibrary;
