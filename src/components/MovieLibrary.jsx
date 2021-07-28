import React, { Component } from 'react';

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
  }

  handleChangeLibrary({ target }) {
    const { name, value } = target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  value: PropTypes.string.isRequired,
};
