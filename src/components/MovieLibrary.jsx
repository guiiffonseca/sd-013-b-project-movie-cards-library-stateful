import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    const { movies } = this.props;
    this.setState({ searchText: value, movies });
      if (value !== '') {
        this.setState((total) => ({
          movies: total.movies.filter((movie) => {
            let { title, subtitle, storyline } = movie;
            title = title.toLowerCase();
            subtitle = subtitle.toLowerCase();
            storyline = storyline.toLowerCase();
            if (title.includes(value)) return true;
            if (subtitle.includes(value)) return true;
            if (storyline.includes(value)) return true;
            return false;
          }),
        }));
      }
    }

    onBookmarkedChange(event) {
      const { checked } = event.target;
      const { movies } = this.props;
      this.setState({ bookmarkedOnly: checked });
      if (checked) {
        this.setState((total) => ({
          movies: total.movies.filter((movie) => movie.bookmarked),
        }));
      } else {
        this.setState({ movies }); // else necessário para retornar todos quando favoritos estiver desmarcado
      }
    }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    const { movies } = this.props;
      this.setState({ selectedGenre: value, movies });
      if (value !== '') {
        this.setState((total) => ({
          movies: total.movies.filter((movie) => (movie.genre === value ? true : false)),
        }));
      }
    }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
