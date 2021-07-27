import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';
// import { select } from 'async';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
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
      selectedGenre: target.value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      const favoriteMovies = movies.filter((movie) => movie.rating);
      return <MovieList movies={ favoriteMovies } />;
    } if (selectedGenre.length !== 0) {
      const sameGenre = movies.filter((movie) => movie.genre === selectedGenre);
      return <MovieList movies={ sameGenre } />;
    } if (searchText.length !== 0) {
      const searchTextFilter = movies.filter(
        ({ title, subtitle, storyline }) => title
          .includes(searchText) || subtitle.includes(searchText) || storyline.includes(searchText),
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
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
