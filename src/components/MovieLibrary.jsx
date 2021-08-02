// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarkedOnly: false,
      selectedGenre: '',
      searchText: '',
    };

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onBookmarkedChange() {
    this.setState((prevState) => ({
      bookmarkedOnly: !prevState.bookmarkedOnly,
    }));
  }

  onSelectedGenreChange() {

  }

  onSearchTextChange() {
    // const { name } = target;

    // this.setState({
    //   [name]: value,
    // });
  }

  render() {
    const { props, state } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={ state.bookmarkedOnly }
          selectedGenre={ state.selectedGenre }
          searchText={ state.searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList
          movies={ props.movies }
          bookmarkedOnly={ state.bookmarkedOnly }
          selectedGenre={ state.selectedGenre }
          searchText={ state.searchText }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
