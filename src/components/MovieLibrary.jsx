import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.searchChange = this.searchChange.bind(this);
    this.bookChange = this.bookChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.MovieMark = this.MovieMark.bind(this);
    this.handleClick = this.handleClick.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,

    };
  }

  handleClick(e) {
    this.setState((prev) => ({
      movies: [...prev.movies, e],
    }));
  }

  bookChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  selectChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  MovieMark() { // Ideia tirada do projeto de Matheus Goncalves
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filmes = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText) || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));
    if (bookmarkedOnly) {
      filmes.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre !== '') {
      filmes.filter(({ genre }) => genre === selectedGenre);
    }
    return filmes;
  }

  searchChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectChange }
        />
        <MovieList movies={ this.MovieMark() } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
