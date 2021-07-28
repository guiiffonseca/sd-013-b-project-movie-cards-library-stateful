// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      array: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onCLickHandle(event) {
    event.preventDefault();
    console.log(event.target.array);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, array } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.onCLickHandle } array={ array } />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
