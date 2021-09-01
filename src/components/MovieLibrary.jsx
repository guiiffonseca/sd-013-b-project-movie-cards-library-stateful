import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: props.movies,
      selectedMovies: [...props.movies],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
    // this.selectMovies(event.target.value);
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
    // this.selectBookmarked(event.target.value);
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
    // this.selectGenre(event.target.value);
  }

  onBtnClick(newMovie) {
    // const { movies } = this.state;
    this.setState((prevstate) => (
      { selectedMovies: [...prevstate.selectedMovies, newMovie] }));
  }

  selectMovies() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      selectedMovies,
    } = this.state;
    const textSearch = selectedMovies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    const bookmarkedSearch = selectedMovies.filter((movie) => movie.bookmarked === true);
    const genreSearch = selectedMovies.filter((movie) => movie.genre === selectedGenre);

    if (searchText !== '') {
      return textSearch;
    }
    if (bookmarkedOnly === true) {
      return bookmarkedSearch;
    }
    if (selectedGenre !== '') {
      return genreSearch;
    }
    return selectedMovies;
  }

  /*   selectMovies = (event) => {
    // const { movies } = this.state;

    this.setState({
      selectedMovies: movies.filter((movie) => {
        const byTitle = movie.title.toLowerCase().includes(event);
        const bySubtitle = movie.subtitle.toLowerCase().includes(event);
        const byStoryline = movie.storyline.toLowerCase().includes(event);
        return byTitle || bySubtitle || byStoryline;
      }),
    });
  }

  // selectBookmarked(event) {
  //   const { movies } = this.state;
  //   let bookmarkedMovies = [...movies];

  //   if (event.target.checked) {
  //     bookmarkedMovies = movies.filter((movie) => movie.bookmarked);
  //   }

  //   this.setState({
  //     selectedMovies: bookmarkedMovies,
  //   });
  // }

  // selectGenre(event) {
  //   const { movies } = this.state;

  //   this.setState({
  //     selectedMovies: movies.filter((movie) => {
  //       const byGenre = movie.genre.toLowerCase().includes(event);
  //       return byGenre;
  //     }),
  //   });
  // }
 */

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      // selectedMovies,
    } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.selectMovies() } />
        <AddMovie onClick={ this.onBtnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  movies: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieLibrary;
