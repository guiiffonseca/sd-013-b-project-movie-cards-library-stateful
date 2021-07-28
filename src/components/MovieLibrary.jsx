import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  filteredMovies = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const firstFilter = bookmarkedOnly ? movies
      .filter((movie) => movie.bookmarked === true) : movies;
    const secondFilter = firstFilter
      .filter((movie) => movie.title
        .includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));
    const thirdFilter = secondFilter
      .filter((movie) => movie.genre
        .includes(selectedGenre));
    return thirdFilter;
  }

  createMovie = (createdMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, createdMovie],
    });
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
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.createMovie } data-testid="add-movie-form" />
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

export default MovieLibrary;
