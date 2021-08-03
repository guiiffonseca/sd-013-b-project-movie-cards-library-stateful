import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  /*
  constructor() {
    super();
    this.state = {
      searchText: '',
      onSearchTextChange: () => {},
      bookmarkedOnly: false,
      onBookmarkedChange: () => {},
      selectedGenre: '',
      onSelectedGenreChange: () => {},
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }
  onSearchTextChange(event) {
    console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  }
  onBookmarkedChange(event) {
    console.log(event.target.checked);
    this.setState({ bookmarkedOnly: event.target.checked });
  }
  onSelectedGenreChange(event) {
    console.log(event.target.checked);
    this.setState({ selectedGenre: event.target.value });
  } */

  /*
  <section>
        <input
          value={ searchText }
          type="text"
          onChange={ this.onSearchTextChange }
        />
        <input
          checked={ bookmarkedOnly }
          type="checkbox"
          onChange={ this.onBookmarkedChange }
        />
        <select>
          <option
            value={ selectedGenre }
            onChange={ this.onSelectedGenreChange }
          >
            Todos
          </option>
        </select>
      </section>
  */

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
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
