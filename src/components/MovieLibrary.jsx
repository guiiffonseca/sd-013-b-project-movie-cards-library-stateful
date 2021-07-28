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
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange() {
    this.setState({
      bookmarkedOnly: true,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      bookmarkedOnly: false,
      selectedGenre: target.value,
    });
  }

  onClickHandle() {
    // const { handleChange } = this.props;
    const { movies } = this.state;
    this.setState({
      movies: [...movies],
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly === true) {
      const favoriteMovies = movies.filter((movie) => movie.bookmarked === true);
      return <MovieList movies={ favoriteMovies } />;
    } if (selectedGenre.length !== 0) {
      const sameGenre = movies.filter((movie) => movie.genre === selectedGenre);
      return <MovieList movies={ sameGenre } />;
    } if (searchText.length !== 0) {
      const searchTextFilter = movies.filter(
        ({ title, subtitle, storyline }) => title.toLowerCase()
          .includes(searchText.toLowerCase()) || subtitle
          .toLowerCase().includes(searchText
            .toLowerCase()) || storyline.includes(searchText),
      );
      return <MovieList movies={ searchTextFilter } />;
    }
    return <MovieList movies={ movies } />;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        {this.filteredMovies()}
        <AddMovie onClick={ this.onClickHandle } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
