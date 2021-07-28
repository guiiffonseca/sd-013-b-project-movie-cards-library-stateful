import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

let shownMovies = [];

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });

    if (bookmarkedOnly === false) {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked === true) });
    } else if (searchText === '') {
      console.log('a');
      shownMovies = movies.filter((movie) => movie.title.toLowerCase()
        .includes(searchText.toLowerCase()) || movie.subtitle.toLowerCase()
        .includes(searchText.toLowerCase()) || movie.storyline.toLowerCase()
        .includes(searchText.toLowerCase()));
      this.setState({ movies: shownMovies });
    } else if (selectedGenre === '') {
      shownMovies = movies.filter((movie) => movie.genre === selectedGenre);
      this.setState({ movies: shownMovies });
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ this.searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ this.bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ this.selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
