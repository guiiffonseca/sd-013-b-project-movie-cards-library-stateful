import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleFavMarked = (event) => {
    this.setState({
      [event.target.name]: event.target.name === 'bookmarkedOnly'
        ? event.target.checked : event.target.value,
    });
  }

  handleSelectedGenre = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          handleSearchText={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          handleSelectedGenre={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
