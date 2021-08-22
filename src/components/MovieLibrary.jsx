import React, { Component } from 'react';

import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <SearchBar
        onSearchTextChange={ (evt) => this.setState({ searchText: evt.target.value }) }
        searchText={ searchText }
      />
    );
  }
}

export default MovieLibrary;
