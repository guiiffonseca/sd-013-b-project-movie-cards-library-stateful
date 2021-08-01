// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'Todos',
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      feedback: '',
      genre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
