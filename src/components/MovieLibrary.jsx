import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox' ? 'checked' : target.value);
    this.setState({ [name]: value });
  }

  onSearchTextChange({ target }) {
    this.handleChange(target);
  }

  onBookmarkedChange = () => {
    this.setState((priorState) => ({ bookmarkedOnly: !priorState.bookmarkedOnly }));
  }

  render() {
    const { movies } = this.state;
    const { title, subtitle, storyline, imagePath, rating, genre } = movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.handleChange }
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
