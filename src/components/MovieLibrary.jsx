// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
// import MovieCard from './MovieCard';

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

  filtredMovies = () => {
    const { bookmarkedOnly, movies, searchText } = this.state;
    const favoritMovies = movies
      .filter((movie) => (bookmarkedOnly ? movie : movies));

    const searchedMovies = favoritMovies
      .filter(({ title, subtitle, storyline }) => title.includes(searchText)
     || subtitle.includes(searchText) || storyline.includes(searchText));

    return searchedMovies;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> The amazing movie library </h2>
        {/* { bookmarkedOnly === } */}
        {/* <AddMovie onClick={ this.callbackAddMovie } /> */}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          checked={ bookmarkedOnly }
          onBookmarkedOnlyChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filtredMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};
