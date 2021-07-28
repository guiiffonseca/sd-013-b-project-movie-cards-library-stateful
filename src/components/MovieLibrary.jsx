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
      // movies: props.movies,
    };

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInputs }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleInputs }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleInputs }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
