import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

/* ajuda de Lucas Caribé na lógica para implementar as funções no requisito 18 */

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
    if (event.target.checked === true) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    } else {
      this.setState({
        movies: [...movies],
      });
    }
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    this.setState({
      selectedGenre: event.target.value,
    });
    if (event.target.value === '') {
      this.setState({
        movies: [...movies],
      });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === event.target.value),
      });
    }
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    this.setState({
      searchText: event.target.value,
    });
    if (event.target.value === '') {
      this.setState({
        movies: [...movies],
      });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.title.includes(event.target.value)
        || movie.subtitle.includes(event.target.value)
        || movie.storyline.includes(event.target.value)),
      });
    }
  }

  addNewMovie(movie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <fieldset>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          movies={ movies }
        />
        <AddMovie
          onClick={ this.addNewMovie }
        />
        <MovieList
          movies={ movies }
        />
      </fieldset>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieLibrary;
