import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      selectedMovies: [...props.movies],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
    console.log(event.target.value);
    console.log(this.searchText);
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

  onClick(newMovie) {
    const { movies } = this.state;
    const newMovies = [...movies];
    newMovies.push({ ...newMovie, bookmarked: false });
    this.setState({
      movies: newMovies,
    });
  }

  selectMovies = (event) => {
    const { movies } = this.state;

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

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      selectedMovies,
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
