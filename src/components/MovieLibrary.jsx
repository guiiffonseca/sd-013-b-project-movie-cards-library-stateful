import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
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

    this.onClickChange = this.onClickChange.bind(this);
    this.genericChange = this.genericChange.bind(this);
  }

  onClickChange() {
    return null;
  }

  genericChange({ target }) {
    const { name, value } = target;
    if (name === 'bookmarkedOnly') {
      this.setState((prevValue) => ({
        [name]: !prevValue.bookmarkedOnly,
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.genericChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.genericChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.genericChange }
        />
        <AddMovie onClick={ this.onClickChange } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
