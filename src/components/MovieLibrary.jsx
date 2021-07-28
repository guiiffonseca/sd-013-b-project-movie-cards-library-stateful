import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    }
  }

  filterMovies() {
    const { movies } = this.props;

    this.setState(({ bookmarkedOnly, selectedGenre, searchText }) => ({
      movies: movies
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
