import React from 'react';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="searchText">
          Search:
          <input
            type="text"
            id="searchText"
            name="searchText"
          />
        </label>

        <label htmlFor="bookMark">
          Book:
          <input
            type="checkbox"
            id="bookMark"
            name="bookmarkedOnly"
          />
        </label>

        <label htmlFor="select">
          Select Genre:
          <input
            type="select"
            id="select"
            name="selectedGenre"
          />
        </label>
      </form>
    );
  }
}

export default MovieLibrary;
