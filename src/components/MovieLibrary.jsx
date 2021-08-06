import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.updateMovie = this.updateMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieList: [...props.movies],
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
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = this.state;
    const searchByText = movieList.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    const searchByBookmark = movieList.filter((movie) => movie.bookmarked === true);
    const searchByGenre = movieList.filter((movie) => movie.genre === selectedGenre);

    if (searchText !== '') {
      return searchByText;
    }
    if (bookmarkedOnly === true) {
      return searchByBookmark;
    }
    if (selectedGenre !== '') {
      return searchByGenre;
    }
    return movieList;
  }

  updateMovie(newMovie) {
    this.setState((prevstate) => ({ movieList: [...prevstate.movieList, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        console.log(movieList);
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.searchMovies() } />
        <AddMovie onClick={ this.updateMovie } />
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
        rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        genre: PropTypes.string,
      },
    ),
  ).isRequired,
};

export default MovieLibrary;
