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
    const { movies } = props;
    movies.push(state);
    movies.bookmarkedOnly = true;
    this.setState({ movies });
  }

  render() {
    const { state, handleChange, onClick } = this;
    const { movies, bookmarkedOnly, searchText, selectedGenre, newMovie } = state;
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
        <MovieList
          movies={ movies }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          searchText={ searchText }
          newMovie={ newMovie }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
