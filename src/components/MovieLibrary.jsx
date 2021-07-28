import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SeacrhBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeBookmarked = this.onChangeBookmarked.bind(this);
  }

  onChangeText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onChangeBookmarked(event) {
    const { name } = event.target;
    const { bookmarkedOnly } = this.state;
    this.setState({
      [name]: !bookmarkedOnly,
    });
    const { movies } = this.props;
    if (bookmarkedOnly) {
      this.setState({ movies });
    } else {
      const temp = movies.filter((filme) => filme.bookmarked === true);
      this.setState({ movies: temp });
    }
  }

  teste(estado) {
    console.log(estado);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SeacrhBar
          searchText={ searchText }
          onSearchTextChange={ this.onChangeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChangeBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChangeText }

        />

        <MovieList
          movies={ movies }
        />

        <AddMovie
          onClick={ this.teste }
        />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
