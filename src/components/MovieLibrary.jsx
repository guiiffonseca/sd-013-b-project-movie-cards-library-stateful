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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    const { state, handleChange } = this;
    const { movies, bookmarkedOnly, searchText, selectedGenre } = state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList
          movies={ movies }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          searchText={ searchText }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
