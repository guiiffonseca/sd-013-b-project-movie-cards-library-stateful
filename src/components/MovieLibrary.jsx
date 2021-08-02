import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: true,
      selectedGenre: '',
    };
  }

  onSearchTextChange(event) {
    // const { name } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
  }

  onSelectedGenreChange() {
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
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
