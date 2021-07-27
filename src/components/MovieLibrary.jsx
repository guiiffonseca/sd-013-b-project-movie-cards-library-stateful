import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onInputChange(e) {
    const { name, type } = e.target;
    let { value } = e.target;
    if (type === 'checkbox')value = e.target.checked;
    this.setState({ [name]: value });
  }

  filterMovies() {
    const s = this.state;
    const filtered = s.movies.filter((x) => (x.title.includes(s.searchText)
    || x.subtitle.includes(s.searchText)
    || x.storyline.includes(s.searchText))
    && x.genre.includes(s.selectedGenre));
    return s.bookmarkedOnly === false ? filtered
      : filtered.filter((x) => x.bookmarked === true);
  }

  addMovie(params) {
    const newMovie = {
      title: params.title,
      subtitle: params.subtitle,
      storyline: params.storyline,
      rating: params.rating,
      imagePath: params.imagePath,
      bookmarked: params.bookmarked,
      genre: params.genre,
    };
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  render() {
    const s = this.state;
    return (
      <div>
        <SearchBar
          searchText={ s.searchText }
          onSearchTextChange={ this.onInputChange }
          bookmarkedOnly={ s.bookmarkedOnly }
          onBookmarkedChange={ this.onInputChange }
          selectedGenre={ s.selectedGenre }
          onSelectedGenreChange={ this.onInputChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default MovieLibrary;
