import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleBookmark = ({ target }) => {
    const { bookmarkedOnly } = this.state;
    this.setState({ [target.name]: !bookmarkedOnly });
  }

  render() {
    const { state, handleChange, handleBookmark } = this;
    const { movies, bookmarkedOnly, searchText, selectedGenre } = state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleBookmark }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList
          movies={ movies }
          bookmarkedOnly={ bookmarkedOnly }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
