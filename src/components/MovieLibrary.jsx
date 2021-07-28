import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(movies) {
    super();
    // const { movies } = this.props;
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleSearchChange(event) {
    this.setState({
      searchText: [event.target.value],
    });
  }

  handleBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: [event.target.value],
    });
  }

  handleSelectedChange(event) {
    this.setState({
      selectedGenre: [event.target.value],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedChange }
        />
        <MovieList movies={ movies.movies } />
      </div>
    );
  }
}
