import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { value } = target;

    const filter = movies.filter((movie) => (
      movie.title.includes(value) || movie.subtitle.includes(value)
      || movie.storyline.includes(value)));

    this.setState({
      searchText: value,
      movies: filter,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.props;

    const filter = movies.filter((movie) => movie.bookmarked === checked);

    if (checked) {
      this.setState({
        bookmarkedOnly: checked,
        movies: filter,
      });
    } else {
      this.setState({
        bookmarkedOnly: checked,
        movies,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.props;

    const filter = movies.filter((movie) => movie.genre.includes(value));

    if (value === '') {
      this.setState({
        selectedGenre: 'Todos',
        movies,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: filter,
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

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
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
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
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
        bookmarked: PropTypes.bool.isRequired,
        genre: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieLibrary;
