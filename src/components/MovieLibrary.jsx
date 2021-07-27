// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.hadleSearchText = this.hadleSearchText.bind(this);
    this.hadleFilterFavorite = this.hadleFilterFavorite.bind(this);
    this.hadleFilterGenre = this.hadleFilterGenre.bind(this);
  }

  hadleSearchText({ target }) {
    const { value } = target;
    const { bookmarkedOnly } = this.state;
    this.setState({
      searchText: value,
      movies: movies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(value.toLowerCase())
        || subtitle.toLowerCase().includes(value.toLowerCase())
        || storyline.toLowerCase().includes(value.toLowerCase())
      )),
    });
    // if (bookmarkedOnly === true) {
    //   return (
    //     this.setState({
    //       movies: movies.filter(({ title, subtitle, storyline }) => (
    //         title.toLowerCase().includes(value.toLowerCase())
    //         || subtitle.toLowerCase().includes(value.toLowerCase())
    //         || storyline.toLowerCase().includes(value.toLowerCase())
    //       )),
    //       searchText: target.value,
    //       bookmarkedOnly: false,
    //     })
    //   );
    // }
  }

  hadleFilterFavorite({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });

    if (checked === true) {
      return (
        this.setState({
          movies: movies.filter(({ bookmarked }) => (
            bookmarked === true
          )),
        })
      );
    } if (checked === false) {
      return (
        this.setState({
          movies: movies.filter(() => (
            true
          )),
        }));
    }
  }

  hadleFilterGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
      movies: movies
        .filter(({ genre }) => this.Compare(target.value, genre)),
    });
  }

  Compare(value, genre) {
    if (value === '') { return true; }
    if (value === genre) { return true; }
  }

  render() {
    const { movies } = this.props;
    const { state } = this;
    return (
      <div>
        <SearchBar
          searchText={state.searchText}
          onSearchTextChange={this.hadleSearchText}
          bookmarkedOnly={state.bookmarkedOnly}
          selectedGenre={state.selectedGenre}
          onBookmarkedChange={this.hadleFilterFavorite}
          onSelectedGenreChange={this.hadleFilterGenre}
        />
        <MovieList movies={state.movies} />
      </div>
    );
  }
}

export default MovieLibrary