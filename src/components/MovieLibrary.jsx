import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      allMovies: movies,
    }
  }

  filterMovies = () => {
    this.setState(({ allMovies, bookmarkedOnly, selectedGenre, searchText }) => ({
      movies: allMovies
        .filter(({ bookmarked }) => 
          !bookmarkedOnly
          || bookmarked
        )
        .filter(({ genre }) => 
          !selectedGenre
          || genre === selectedGenre
        )
        .filter(({ title, subtitle, storyline }) =>
          !searchText
          || title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
        ),
    }));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: 
        event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value,
    });
    this.filterMovies();
  }

  handleAdd = (movie) => {
    this.setState(({ allMovies }) => ({
      allMovies: [ ...allMovies, { ...movie, rating: parseFloat(movie.rating), bookmarked: false } ],
    }));
    this.filterMovies();
  }
  
  render() {
    const { bookmarkedOnly, movies, searchText, selectedGenre } = this.state;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies }/>
        <AddMovie onClick={ this.handleAdd }/>
      </>
    )
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ),
};

MovieLibrary.defaultProps = {
  movies: [],
};
