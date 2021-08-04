import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  // onSearchTextChange(event) {
  //   const { value } = event.target;
  //   this.setState({ movies: movies.filter(({ title, subtitle, storyline })) ,
  //     title === value || subtitle === value || storyline === value
  //   })
  // };

  // onBookmarkedChange() {

  // }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    // console.log(movies);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          // onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          // onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          // onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie onClick="" />
        <MovieList movies={ movies } />

      </div>

    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
