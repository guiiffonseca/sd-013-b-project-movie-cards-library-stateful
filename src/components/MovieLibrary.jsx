import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, () => {
      const { movies, searchText } = this.state;
      const filtered = movies
        .filter(({ title, subtitle, storyline }) => title.includes(searchText)
    || subtitle.includes(searchText)
    || storyline.includes(searchText));
      this.setState({ movies: filtered });
    });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      const { movies, bookmarkedOnly } = this.state;
      const filtered = (bookmarkedOnly)
        ? movies.filter(({ bookmarked }) => bookmarked === true) : movies;
      this.setState({ movies: filtered });
    });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      const { movies, selectedGenre } = this.state;
      const filtered = movies
        .filter(({ genre }) => genre.includes(selectedGenre));
      this.setState({ movies: filtered });
    });
  }

  onClick(event) {
    event.preventDefault();
    console.log('4');
  }

  render() {
    const { searchText, bookmarkedOnly, movies, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}