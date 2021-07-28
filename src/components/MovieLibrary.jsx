import React, { Component } from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  filterMovies = () => {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    let filteredMovies = movies;
    if (searchText !== '') {
      filteredMovies = movies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
        || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }

    return filteredMovies;
  }

  pushMovie = (state) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (target.type === 'checkbox') {
      this.setState({ [name]: target.checked });
      return;
    }
    this.setState({ [name]: value });
  }


  // onSearchTextChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // }

  // onSelectedGenreChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // }

  // onBookmarkedChange = ({ target }) => {
  //   this.setState({ bookmarkedOnly: target.checked });
  // }

  render() {
    const { searchText, bookmarkedOnly,
      selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie onClick={ this.pushMovie } />
        <MovieList
          movies={ this.filterMovies(movies, searchText, bookmarkedOnly, selectedGenre) }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.object),
}.isRequeride;
