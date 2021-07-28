import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovies from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(movies) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: [event.target.value],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies.movies } />
        <AddMovies />
      </div>
    );
  }
}

//filtrar um array baseado no que estiver no state do searchBar
//passar para movie List um array de elementos a serem renderizados
