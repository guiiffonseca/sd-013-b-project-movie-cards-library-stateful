import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    console.log(name);
    const value = (target.type === 'checkbox' ? 'checked' : target.value);
    this.setState({ [name]: value });
  }

  onSelectedGenreChange({ target }) {
    console.log(target);
  }

  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onChange={ this.handleChange }
        />
        <AddMovie
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          imagePath={ imagePath }
          rating={ rating }
          genre={ genre }
        />
        <MovieList className="movie-list" movies={ movies } title={ movies.title } />
      </div>
    );
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
    }),
  ).isRequired,
};
