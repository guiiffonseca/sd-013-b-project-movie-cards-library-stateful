import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    const { value } = target;
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => (movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)));
    this.setState({
      searchText: value,
      movies: filteredMovies,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    const { movies } = this.props;
    if (value === '') this.setState({ movies });
    const filteredGenre = movies
      .filter((movie) => movie.genre === value);
    this.setState({
      selectedGenre: value,
      movies: filteredGenre,
    });
  }

  onBookmarkedChange = () => {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    const onBookMark = movies.filter((movie) => movie.bookmarked === true);
    if (!bookmarkedOnly) {
      return this.setState({
        bookmarkedOnly: true,
        movies: onBookMark,
      });
    }
    this.setState({
      bookmarkedOnly: false,
      movies,
    });
  }

  onClick = (addNewMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, addNewMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
