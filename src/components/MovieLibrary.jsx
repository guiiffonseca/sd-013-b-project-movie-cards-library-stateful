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
    this.onChangeGenre = this.onChangeGenre.bind(this);
  }

  onChangeText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const { movies } = this.props;
    const temp = movies.filter((filme) => {
      const { title, subtitle, storyline } = filme;
      const arr = [title.toUpperCase(), subtitle.toUpperCase(), storyline.toUpperCase()];
      const result = arr.some((prop) => prop.includes(value.toUpperCase()));
      if (result) {
        return true;
      }
      return false;
    });
    this.setState({
      movies: temp,
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

  onChangeGenre(event) {
    const { value } = event.target;
    const { movies } = this.props;
    const temp = movies.filter((filme) => filme.genre === value);
    this.setState({
      movies: temp,
    });
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
          onSelectedGenreChange={ this.onChangeGenre }

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
