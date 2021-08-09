import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarkChange(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <AddMovie />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTitleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
