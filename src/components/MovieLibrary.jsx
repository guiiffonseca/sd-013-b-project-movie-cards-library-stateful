// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: [...movies],
      filtered: movies,
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  onSearchTextChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.updateState());
  }

  onBookmarkedChange({ target }) {
    const { checked, name } = target;
    this.setState({
      [name]: checked,
    }, () => this.updateState());
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    }, () => this.updateState());
  }

  updateState() {
    const { searchText, bookmarkedOnly, selectedGenre, movies, filtered } = this.state;
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
        movies: filtered.filter((event) => event.bookmarked),
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    return (
      <div>
        <MovieList movies={ movies } />
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectGenre={ selectGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
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
