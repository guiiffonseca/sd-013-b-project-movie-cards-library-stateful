// implement MovieLibrary component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
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
    };

    this.handle = this.handle.bind(this);
  }

  handle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          SearchText={ searchText }
          onSearchTextChange={ this.handle }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handle }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handle }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.string.isRequired,
};

export default MovieLibrary;
