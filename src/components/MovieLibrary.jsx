// implement MovieLibrary component here

import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',

    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <SearchBar
          value={ searchText }

        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
