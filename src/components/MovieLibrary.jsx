import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

    handleChange = ({ target }) => {
      const { name } = target;
      const { value } = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ [name]: value });
    };

    render() {
      const { searchText, bookMarkedOnly, selectedGenre, movies } = this.state;
      return (
        <div>
          <h2> My awesome movie library </h2>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookMarkedOnly }
            handleBookMarkedOnly={ this.handleChange }
            selectedGenre={ selectedGenre }
            handleGenre={ this.handleChange }

          />
          <AddMovie />
          <MovieList movies={ movies } />
        </div>
      );
    }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
