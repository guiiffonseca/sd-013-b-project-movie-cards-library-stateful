import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleTextChange(event) {
    const { name, value } = event.target;
    const { movies } = this.props;
    this.setState({
      [name]: value,
    });
    this.setState(({ searchText }) => ({
      movies: movies
        .filter(({ title, subtitle, storyline }) => (
          (searchText !== '')
            ? title.toLowerCase().includes(searchText.toLowerCase())
            || subtitle.toLowerCase().includes(searchText.toLowerCase())
            || storyline.toLowerCase().includes(searchText.toLowerCase())
            : movies
        )),
    }));
  }

  handleCheck(event) {
    const { name, checked } = event.target;
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    this.setState({
      [name]: checked,
    });

    this.setState(() => ({
      movies: movies
        .filter(({ bookmarked }) => (
          (!bookmarkedOnly)
            ? bookmarked
            : movies
        )),
    }));
  }

  handleGenreChange(event) {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));

    this.setState(({ selectedGenre }) => ({
      movies: movies
        .filter(({ genre }) => (
          (selectedGenre)
            ? genre === selectedGenre
            : movies
        )),
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheck }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
