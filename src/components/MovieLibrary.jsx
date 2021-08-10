import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFilters = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filterByBookmarked = movies.filter(({ bookmarked }) => (
      bookmarkedOnly ? bookmarked : movies
    ));
    const filterByText = filterByBookmarked.filter(({ title, subtitle, storyline }) => (
      title.toLowerCase().includes(searchText)
      || subtitle.toLowerCase().includes(searchText)
      || storyline.toLowerCase().includes(searchText)
    ));
    const filterByGenre = filterByText.filter(({ genre }) => (
      selectedGenre ? genre === selectedGenre : movies
    ));
    return filterByGenre;
  };

  addMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.handleFilters() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
