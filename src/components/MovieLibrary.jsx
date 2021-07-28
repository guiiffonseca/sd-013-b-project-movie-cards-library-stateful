import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

// source: https://www.robinwieruch.de/react-pass-props-to-component
// how to pass props to constructor:
class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const {
      movies,
    } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(event) {
    console.log(event);
  }

  render() {
    const { searchText,
      bookmarkedOnly,
      selectedGenre,
      movies: movie } = this.state;
    const {
      movies,
      onClick,
    } = this.props;
    return (
      <div>
        <div>{ movies[0].title }</div>
        <SearchBar />
        <AddMovie onClick={ onClick } />
        <MovieList movies={ movies } />
        <div>
          Div para o EsLint não reclamar
          {searchText
      + bookmarkedOnly
      + selectedGenre
      + movie}
        </div>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(PropTypes.movies)
    .isRequired,
  onClick: PropTypes.func
    .isRequired,
};

export default MovieLibrary;
