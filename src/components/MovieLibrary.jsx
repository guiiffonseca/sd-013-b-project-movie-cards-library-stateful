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
    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
    this.filterFavorites = this.filterFavorites.bind(this);
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterFavorites() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    const arrayMovies = movies.filter(({ title, subtitle, storyline }) => title
      .includes(searchText) + subtitle
      .includes(searchText) + storyline
      .includes(searchText)).filter(({ genre }) => genre.includes(selectedGenre))
      .filter(({ bookmarked }) => {
        if (bookmarkedOnly === false) {
          return true;
        }
        return bookmarked === bookmarkedOnly;
      });
    this.setState = ({
      movies: arrayMovies,
    });
  }

  render() {
    this.filterFavorites();
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ () => {} } />
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
