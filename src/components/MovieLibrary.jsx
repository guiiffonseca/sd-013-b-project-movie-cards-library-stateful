import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filteredMovies: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
    this.selectedGenre = this.selectedGenre.bind(this);
  }

  onSearchTextChange(event) {
    const { searchText } = this.state;
    this.setState({ searchText: event.target.value });
    console.log(movies
      .filter(({ title, subtitle, storyline }) => title.includes(searchText)
    || subtitle.includes(searchText)
    || storyline.includes(searchText)));
  }

  bookmarkedOnly(event) {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: event.target.checked });
    console.log((!bookmarkedOnly)
      ? movies.filter(({ bookmarked }) => bookmarked === true) : movies);
  }

  selectedGenre(event) {
    const { selectedGenre } = this.state;
    this.setState({ selectedGenre: event.target.value }, () => {
      console.log(selectedGenre);
    });
  }
  //  console.log(movies
  //  .filter(({ genre }) => genre.includes(selectedGenre))));

  render() {
    const { bookmarkedOnly, searchText, selectedGenre, filteredMovies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenre }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie
          onCLick={ () => console.log('4') }
        />
      </div>
    );
  }
}

export default MovieLibrary;
