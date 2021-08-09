import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarkChange(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTitleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieLibrary
          movies={ movies }
        />
      </div>
    );
  }
}

export default App;
