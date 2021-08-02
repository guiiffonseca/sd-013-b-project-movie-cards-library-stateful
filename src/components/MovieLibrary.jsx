// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import '../App.css';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'Todos',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    const value = target.checked;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      feedback,
      genre,
    } = this.state;

    return (
      <div>
        <h2> The amazing movie library </h2>
        <MovieList />
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchTextValue={ searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnlyValue={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenreValue={ selectedGenre }
        />
        <AddMovie
          titleValue={ title }
          handleChange={ this.handleChange }
          subtitleValue={ subtitle }
          imagePathValue={ imagePath }
          storylineValue={ storyline }
          ratingValue={ rating }
          feedbackValue={ feedback }
          genreValue={ genre }
        />
      </div>
    );
  }
}
