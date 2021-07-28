// implement MovieLibrary component here
// Como colocar no estado o movies? Fica undefined sempre. Cria um movie, atualiza mas o teste não pega.
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    let { movies } = this.props;
    movies = JSON.parse(JSON.stringify(movies));
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,

    };
    this.handleData = this.handleData.bind(this);
    this.createMovieCard = this.createMovieCard.bind(this);
  }

  handleData = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;

    this.setState(({
      [name]: value,
    }));
  }

  filterBookmarked = (array) => {
    const { state } = this;
    const bool = state.bookmarkedOnly;
    let answer = array;
    if (bool) { answer = array.filter((movie) => movie.bookmarked === true); }
    return answer;
  }

  filterGenre = (array) => {
    const { state } = this;
    const genre = state.selectedGenre;
    let answer = array;
    if (genre !== '') { answer = array.filter((movie) => movie.genre === genre); }
    return answer;
  }

  filterSearchText = (array) => {
    const { state } = this;
    const search = state.searchText;
    let answer = array;
    if (search !== '') {
      answer = array.filter((movie) => {
        const fullText = `${movie.title} ${movie.subtitle} ${movie.storyline}`;
        return fullText.includes(search);
      });
    }
    return answer;
  }

  createMovieCard = (movie) => {
    const { movies } = this.state;
    movies.push(movie);
    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    movies = this.filterBookmarked(movies);
    movies = this.filterGenre(movies);
    movies = this.filterSearchText(movies);

    return (
      <div className="movie-library">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleData }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleData }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleData }

        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.createMovieCard } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
