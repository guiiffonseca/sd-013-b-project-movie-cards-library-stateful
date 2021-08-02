import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

  onClick = (state, event) => {
    event.preventDefault();
    const { props } = this;
    const movies = [...props.movies, state];
    movies.bookmarkedOnly = true;
    this.setState({ movies });
  }

  filterMovie = () => {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    return movies.filter((bookmarked) => {
      if (bookmarkedOnly) return bookmarked.bookmarked;
      if (selectedGenre) {
        return bookmarked.genre === selectedGenre;
      }
      return bookmarked.title.includes(searchText)
      || bookmarked.subtitle.includes(searchText)
      || bookmarked.storyline.includes(searchText);
    });
  }

  render() {
    const { state, handleChange, onClick, filterMovie } = this;
    const { bookmarkedOnly, searchText, selectedGenre } = state;
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
        <AddMovie onClick={ onClick } />
        <MovieList movies={ filterMovie() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
