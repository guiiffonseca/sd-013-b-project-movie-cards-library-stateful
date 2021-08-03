// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
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

  /* onSearchTextChange = (e) => this.setState({
    searchText: e.target.value,
  })

  onBookmarkedChange = (e) => this.setState({
    bookmarkedOnly: e.target.value,
  })

  onSelectedGenreChange = (e) => this.setState({
    selectedGenre: e.target.value,
  })
 */

  handleChange = ({ target }) => this.setState({
    [target.name]: target.value,
  })

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <AddMovie />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

MovieLibrary.defaultProps = {
  bookmarkedOnly: false,
};
