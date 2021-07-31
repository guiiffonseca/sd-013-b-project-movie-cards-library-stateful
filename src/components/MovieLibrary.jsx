import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnl: false,
      selectedGenre: '',
      // movies: movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    return console.log('');
  }

  render() {
    const { searchText, bookmarkedOnl, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          handleChange={ this.handleChange }
          searchText={ searchText }
          onSearchTextChange={ () => 'callback' }
          bookmarkedOnl={ bookmarkedOnl }
          onBookmarkedChange={ () => 'callback' }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ () => 'callback' }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
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
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
