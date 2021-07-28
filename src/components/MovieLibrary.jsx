import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
    this.filterFavorites = this.filterFavorites.bind(this);
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState = ({
      [name]: value,
    });
  }

  // filterFavorites() {
  //   this.setState = ({
  //     bookmarkedOnly: this.state.bookmarkedOnly === false ? props.movies : 
  //   });
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeLibrary }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeLibrary }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeLibrary }
        />
        <MovieList movies={ this.filterFavorites } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
