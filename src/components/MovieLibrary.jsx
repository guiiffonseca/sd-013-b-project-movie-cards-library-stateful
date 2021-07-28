// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: props.movies,
    };
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  changeHandler({ target }) {
    const name = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.updateState());
  }

  updateState() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText !== '') {
      const filteredArr = movies
        .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      this.setState({
        movies: filteredArr,
      });
    } else {
      const { movies: realMovies } = this.props;
      this.setState({
        movies: realMovies,
      });
    }

    if (selectedGenre) {
      this.setState({
        movies: movies.filter((event) => event.genre === selectedGenre),
      });
    }

    if (bookmarkedOnly) {
      this.setState({
        movies: movies.filter((event) => event.bookmarked),
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre } = this.state;
    const filteredMovies = this.filterMovies();
    return (
      <div>
        <MovieList movies={ filteredMovies } />
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectGenre={ selectGenre }
          onSearchTextChange={ this.changeHandler }
          onBookmarkedChange={ this.changeHandler }
          onSelectedGenreChange={ this.changeHandler }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      bookmarked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default MovieLibrary;
