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
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange({ target }) {
    this.setState({
      title: target.value,
    });
  }

  onSubtitleChange({ target }) {
    this.setState({
      subtitle: target.value,
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
          onTitleChange={ this.onTitleChange }
          subtitleValue={ subtitle }
          onSubtitleChange={ this.onSubtitleChange }
          imagePathValue={ imagePath }
        />
      </div>
    );
  }
}
