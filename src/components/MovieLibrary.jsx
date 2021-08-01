import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value });
  }

  render() {
    const { state, onSearchTextChange } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = state;
    return (
      <div>
        <SearchBar searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
