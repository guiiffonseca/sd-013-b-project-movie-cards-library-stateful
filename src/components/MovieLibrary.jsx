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
    };
  }

  handleNewMovie(newMovie) {
    const { movies } = this.props;
    const newMoviesList = [...movies];

    newMoviesList.push({ ...newMovie, bookmarked: false });

    this.setState({
      filteredMovies: newMoviesList,
    });
  }

  handleChange({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });

    if (value !== '') this.filterMovies(value.toLowerCase());
  }

  handleCheck({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });

    this.filterBookmarked(target.checked);
  }

  handleGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });

    this.filterByGenre(target.value);
  }

  filterBookmarked(checked) {
    const { movies } = this.props;
    let tempMovies = [...movies];

    if (checked) {
      tempMovies = movies.filter(({ bookmarked }) => bookmarked);
    }

    this.setState({
      filteredMovies: tempMovies,
    });
  }

  filterByGenre(genreForFilter) {
    const { movies } = this.props;
    let tempMovies = [...movies];

    if (genreForFilter !== '') {
      tempMovies = movies.filter(({ genre }) => genre === genreForFilter);
    }

    this.setState({
      filteredMovies: tempMovies,
    });
  }

  filterMovies(search) {
    const { movies } = this.props;

    this.setState({
      filteredMovies: movies.filter(({ title, subtitle, storyline }) => {
        const foundTitle = title.toLowerCase().includes(search);
        const foundSubtitle = subtitle.toLowerCase().includes(search);
        const foundStoryline = storyline.toLowerCase().includes(search);

        return foundTitle || foundSubtitle || foundStoryline;
      }),
    });
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
