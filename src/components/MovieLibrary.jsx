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
  
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
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
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
