import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filtredMovies: [...movies],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterMoviesByGenre = this.filterMoviesByGenre.bind(this);
    this.filterMoviesByFavorite = this.filterMoviesByFavorite.bind(this);
    this.filterMoviesByText = this.filterMoviesByText.bind(this);
  }

  onClick(newMovie) {
    const { movies } = this.props;
    const newMovies = [...movies];

    newMovies.push(newMovie);
    this.setState({
      filtredMovies: [...newMovies],
    });
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
    this.filterMoviesByText(target.value.toLowerCase());
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
    this.filterMoviesByFavorite(target.checked);
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
    this.filterMoviesByGenre(target.value);
  }

  filterMoviesByGenre(genre) {
    const { movies } = this.props;
    const allMovies = [...movies];

    this.setState({
      filtredMovies: allMovies.filter((movie) => (genre
        ? movie.genre === genre : movies)),
    });
  }

  filterMoviesByFavorite(check) {
    const { movies } = this.props;
    const allMovies = [...movies];

    this.setState({
      filtredMovies: allMovies.filter((movie) => (check
        ? movie.bookmarked === check : movies)),
    });
  }

  filterMoviesByText(search) {
    const { movies } = this.props;
    const allMovies = [...movies];

    this.setState({
      filtredMovies: allMovies.filter((movie) => (search
        ? movie.title.toLowerCase().includes(search)
        || movie.subtitle.toLowerCase().includes(search)
        || movie.storyline.toLowerCase().includes(search) : movies)),
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      filtredMovies,
    } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <hr />
        <MovieList movies={ filtredMovies } />
        <hr />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
