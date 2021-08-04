import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.filterMovies = this.filterMovies.bind(this);
    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filteredMovies: [...props.movies],
    }
  }

  filterMovies(search) {
    const { movies } = this.props;

    this.setState({
      filteredMovies: movies.filter(({ title, subtitle, storyline }) => {
        const foundTitle = title.toLowerCase().includes(search);
        const foundSubtitle = subtitle.toLowerCase().includes(search);
        const foundStoryline = storyline.toLowerCase().includes(search);

        return foundTitle || foundSubtitle || foundStoryline;
      })
    })
  }

  filterBookmarked(checked) {
    const { movies } = this.props;
    let tempMovies = [...movies];

    if(checked) {
      tempMovies = movies.filter(({ bookmarked }) => bookmarked);
    }

    this.setState({
      filteredMovies: tempMovies,
    })
  }

  filterByGenre(genre) {
    const { movies } = this.props;
    let tempMovies = [...movies];

    if(genre !== '') {
      tempMovies = movies.filter(({ genre }) => genre);
    }

    this.setState({
      filteredMovies: tempMovies,
    })
  }

  handleChange({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    })

    if(value !== '') this.filterMovies(value.toLowerCase());
  }

  handleCheck({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    })
  }

  handleGenre({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    })

    this.filterByGenre(value);
  }

  handleNewMovie(newMovie) {
    const { movies } = this.props;
    const newMoviesList = [...movies];

    newMoviesList.push({...newMovie, bookmarked: false});

    this.setState({
      filteredMovies: newMoviesList,
    })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheck }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
