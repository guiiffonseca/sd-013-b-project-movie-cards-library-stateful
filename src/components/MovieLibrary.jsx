import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleMaster = this.handleMaster.bind(this);
    this.filteredSearch = this.filteredSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleMaster({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filteredSearch() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const bookMarkFilter = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies));
    const searchTextFilter = bookMarkFilter
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    const genreFilter = searchTextFilter
      .filter((movie) => (selectedGenre === '' ? movies : movie.genre === selectedGenre));
    return genreFilter;
  }

  addMovie(element) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, element],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleMaster }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleMaster }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleMaster }
        />
        <MovieList movies={ this.filteredSearch() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.book,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
